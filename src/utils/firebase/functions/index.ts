import axios from 'axios';
import Cookies from 'js-cookie';

import firebase from '../';

export const signOut = async () => {
  try {
    await firebase.auth().signOut();
    Cookies.remove('token');
    window.location.href = '/';

  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (email: string, password: string) => {
  try {
    // const test = await axios({
    //   method: 'POST',
    //   url: '/createUser',
    //   data: {
    //     email: 'test',
    //     passoward: '1234',
    //   }
    // });
    const test = await axios.post('/createUser', {
      email: 'test',
      password: '1234',
    });

    console.log(test);
  } catch(err) {
    console.log(err);
  }
}
