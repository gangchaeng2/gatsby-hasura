const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccount.json");
// const serviceAccount = require(`${process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PATH}`);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://dev-bigshine.firebaseio.com"
});

exports.onCreateDevServer = ({ app }) => {
  app.post('/createUser', async function (req, res, next) {
    let customClaims;
    const user = await admin.auth().createUser({ displayName: 'bigshine', email: 'dev.bigshine@gmail.com', password: '1234qwer!@' });

    if (user.email) {
      customClaims = {
        'https://hasura.io/jwt/claims': {
          'x-hasura-default-role': 'admin',
          'x-hasura-allowed-roles': ['user', 'admin'],
          'x-hasura-user-id': user.uid,
        }
      };
      // if (user.email.indexOf('bigshine') !== -1) {
      //   customClaims = {
      //     'https://hasura.io/jwt/claims': {
      //       'x-hasura-default-role': 'admin',
      //       'x-hasura-allowed-roles': ['user', 'admin'],
      //       'x-hasura-user-id': user.uid,
      //     }
      //   };
      // } else {
      //   customClaims = {
      //     'https://hasura.io/jwt/claims': {
      //       'x-hasura-default-role': 'user',
      //       'x-hasura-allowed-roles': ['user'],
      //       'x-hasura-user-id': user.uid,
      //     }
      //   };
      // }

      await admin.auth().setCustomUserClaims(user.uid, customClaims);
    } else {
      console.log('check email');
    }
    res.json({ message: 'ok' });
  })
}
