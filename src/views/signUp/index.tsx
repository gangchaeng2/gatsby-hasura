import React, { useState } from 'react';

import { onClickSignUp } from '../../utils/firebase/functions';

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <input name="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={onClickSignUp.bind(null, email, password)}>회원가입</button>
    </div>
  );
}

export default SignUpPage;
