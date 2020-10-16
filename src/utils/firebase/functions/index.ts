import firebase from '../';

export const signOut = async () => {
  try {
    await firebase.auth().signOut();
    window.location.href = '/';

  } catch (error) {
    console.log(error);
  }
};

export const onClickSignUp = async (email: string, password: string) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  } catch(err) {
    console.log(err);
  }
}
