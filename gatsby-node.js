// local 회원가입 주석 풀어야 함
// const admin = require("firebase-admin");
// // const serviceAccount = require(`${process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PATH}`);

// admin.initializeApp({
//   // credential: admin.credential.cert(serviceAccount),
//   // credential: admin.credential.applicationDefault(),
//   databaseURL: "https://dev-bigshine.firebaseio.com"
// });

// exports.onCreateDevServer = ({ app }) => {
//   app.post('/createUser', async function (req, res, next) {
//     let customClaims;
//     const user = await admin.auth().createUser({ displayName: 'bigshine', email: 'dev.bigshine@gmail.com', password: '1234qwer!@' });

//     if (user.email) {
//       if (user.email.indexOf('bigshine') !== -1) {
//         customClaims = {
//           'https://hasura.io/jwt/claims': {
//             'x-hasura-default-role': 'admin',
//             'x-hasura-allowed-roles': ['user', 'admin'],
//             'x-hasura-user-id': user.uid,
//           }
//         };
//       } else {
//         customClaims = {
//           'https://hasura.io/jwt/claims': {
//             'x-hasura-default-role': 'user',
//             'x-hasura-allowed-roles': ['user'],
//             'x-hasura-user-id': user.uid,
//           }
//         };
//       }

//       await admin.auth().setCustomUserClaims(user.uid, customClaims);
//     } else {
//       console.log('check email');
//     }
//     res.json({ message: 'ok' });
//   })
// }

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*"

    // Update the page.
    createPage(page)
  }
}
