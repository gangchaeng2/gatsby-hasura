import { useState, useEffect } from 'react';

import firebase from '../utils/firebase'

interface Auth {
  loading: boolean,
  user: object | null,
  token: string | null,
}

function useCheckAuth() {
  const [authState, setAuthState] = useState({ loading: true, user: null, token: null } as Auth);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        let token = await user.getIdToken();
        const idTokenResult = await user.getIdTokenResult();
        const hasuraClaim = idTokenResult.claims["https://hasura.io/jwt/claims"];

        if (hasuraClaim) {
          setAuthState({ loading: false, user, token });
        } else {
          // Check if refresh is required.
          const metadataRef = firebase.database().ref("metadata/" + user.uid + "/refreshTime");

          metadataRef.on("value", async (data) => {
            if(!data.exists) return
            // Force refresh to pick up the latest custom claims changes.
            token = await user.getIdToken(true);
            setAuthState({ loading: false, user, token });
          });
        }
      } else {
        setAuthState({ loading: false, user: null, token: null });
      }
    });
  }, []);

  return { authState };
}

export default useCheckAuth;
