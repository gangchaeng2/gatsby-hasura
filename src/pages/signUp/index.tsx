import React, { useState } from 'react';

import { createUser } from '../../utils/firebase/functions';
import Firebase from '../../utils/firebase'

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function onClickCreateUser() {
    // createUser(email, password);
    var user = await Firebase.auth().createUserWithEmailAndPassword(email, password);
    console.log(user.user?.getIdToken)
    

  }

  return (
    <div>
      <input name="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={onClickCreateUser}>회원가입</button>
    </div>
  );
}

export default SignUpPage;
