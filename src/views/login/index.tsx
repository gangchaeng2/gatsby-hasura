import React, { useState } from 'react';
import { navigate } from 'gatsby';

import Firebase from '../../utils/firebase'

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function onClickSignIn(e: any) {
    e.preventDefault();

    try {
      await Firebase.auth().signInWithEmailAndPassword(email, password);
      navigate('/app/list');

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div title="Login">
      <input name="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={onClickSignIn}>로그인</button>
    </div>
  )
};

export default LoginPage;