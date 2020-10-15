import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

import firebase from '../../utils/firebase'

interface Auth {
  status: string,
  user: object | null,
  token: string | null,
}

function useCheckAuth() {
  const [authState, setAuthState] = useState({ status: 'loading', user: null, token: null } as Auth);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        const token = await user.getIdToken();
        const idTokenResult = await user.getIdTokenResult();
        const hasuraClaim = idTokenResult.claims["https://hasura.io/jwt/claims"];

        console.log(idTokenResult.claims);

        if (hasuraClaim) {
          setAuthState({ status: "in", user, token });
        } else {
          // Check if refresh is required.
          const metadataRef = firebase.database().ref("metadata/" + user.uid + "/refreshTime");

          metadataRef.on("value", async (data) => {
            if(!data.exists) return
            // Force refresh to pick up the latest custom claims changes.
            const token = await user.getIdToken(true);
            setAuthState({ status: "in", user, token });
          });
        }

        Cookies.set('token', token);
      } else {
        setAuthState({ status: "out", user: null, token: '' });
      }
    });
  }, []);

  return { authState };
}

export default useCheckAuth;
