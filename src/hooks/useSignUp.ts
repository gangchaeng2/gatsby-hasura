import firebase from '../../utils/firebase';

export const createUser = async (email: string, password: string) => {
  try {
    const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
    console.log(user?.email);
  } catch(err) {
    console.log(err);
  }
}
