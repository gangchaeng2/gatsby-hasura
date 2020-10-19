import React, { useState } from 'react';

import { onClickSignIn } from '../../utils/firebase/functions'

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div title="Login">
      <input name="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={onClickSignIn.bind(null, email, password)}>로그인</button>
    </div>
  )
};

export default LoginPage;
