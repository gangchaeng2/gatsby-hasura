import firebase from '../../firebase';

export const signOut = async () => {
  try {
    await firebase.auth().signOut();
    window.location.href = "/";

  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (email: string, password: string) => {
  // try {
  //   let customClaims;
  //   const user = await admin.auth().createUser({ email, password });

  //   if (user.email && user.emailVerified) {
  //     if (user.email.indexOf('bigshine') !== -1) {
  //       customClaims = {
  //         'https://hasura.io/jwt/claims': {
  //           'x-hasura-default-role': 'admin',
  //           'x-hasura-allowed-roles': ['user', 'admin'],
  //           'x-hasura-user-id': user?.uid,
  //         }
  //       };
  //     } else {
  //       customClaims = {
  //         'https://hasura.io/jwt/claims': {
  //           'x-hasura-default-role': 'user',
  //           'x-hasura-allowed-roles': ['user'],
  //           'x-hasura-user-id': user?.uid,
  //         }
  //       };
  //     }

  //     await admin.auth().setCustomUserClaims(user.uid, customClaims);
  //   } else {
  //     alert("아이디가 유효하지 않습니다.");
  //   }
  // } catch(err) {
  //   console.log(err);
  // }
}
