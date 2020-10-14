import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
import "firebase/database";

// Firebase config variable. Get this data from the Firebase Console
const config = {
  apiKey: 'AIzaSyDGU_OY3L9C00MH3wzskavQrYTnTz_aQOU',
  authDomain: 'dev-bigshine.firebaseapp.com',
  databaseURL: 'https://dev-bigshine.firebaseio.com',
  projectId: 'dev-bigshine',
  storageBucket: 'dev-bigshine.appspot.com',
  messagingSenderId: '293042696044'
}

const firebaseApp = firebase.initializeApp(config)

export default firebaseApp
