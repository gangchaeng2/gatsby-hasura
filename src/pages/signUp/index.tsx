import React, { useState } from 'react';

import { createUser } from '../../../utils/firebase/functions';

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function onClickCreateUser() {
    createUser(email, password);
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
