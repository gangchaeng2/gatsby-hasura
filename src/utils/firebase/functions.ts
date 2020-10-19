import { navigate } from 'gatsby';

import firebase from './';

export const signOut = async () => {
  try {
    await firebase.auth().signOut();
    navigate('/app/login');

  } catch (error) {
    console.log(error);
  }
};

export const onClickSignUp = async (email: string, password: string) => {
  try {
		await firebase.auth().createUserWithEmailAndPassword(email, password);
		navigate('/app/login');

  } catch(err) {
    console.log(err);
  }
}

export const onClickSignIn = async (email: string, password: string, e: React.SyntheticEvent) => {
	e.preventDefault();

	try {
		await firebase.auth().signInWithEmailAndPassword(email, password);
		navigate('/app/list');

	} catch (err) {
		console.log(err);
	}
}
