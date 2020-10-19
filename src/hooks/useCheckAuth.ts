import { useState, useEffect } from 'react';
import { navigate } from 'gatsby';

import firebase from '../utils/firebase'

interface Auth {
  isLoading: boolean,
  isLoggedIn: boolean,
  token: string | null,
}

function useCheckAuth() {
  const [authState, setAuthState] = useState({ isLoading: true, isLoggedIn: false, token: null } as Auth);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        let token = await user.getIdToken();
        const idTokenResult = await user.getIdTokenResult();
        const hasuraClaim = idTokenResult.claims["https://hasura.io/jwt/claims"];

        if (hasuraClaim) {
          setAuthState({ isLoading: false, isLoggedIn: true, token });
        } else {
          setAuthState({ isLoading: false, isLoggedIn: false, token: null });
          // Check if refresh is required.
          // const metadataRef = firebase.database().ref("metadata/" + user.uid + "/refreshTime");

          // metadataRef.on("value", async (data) => {
          //   if(!data.exists) return
          //   // Force refresh to pick up the latest custom claims changes.
          //   token = await user.getIdToken(true);
          //   setAuthState({ loading: false, user, token });
          // });
        }
      } else {
        setAuthState({ isLoading: false, isLoggedIn: false, token: null });
        // setAuthState({ loading: false, user: null, token: null });
      }
    });
  }, [window.location.pathname]);

  return { authState };
}

export default useCheckAuth;
