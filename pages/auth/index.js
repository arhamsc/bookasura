import Head from 'next/head';
import React, { useState } from 'react';
import AuthForm from '../../components/Functional/Auth/SignUpForm/AuthForm';

const Auth = () => {
  const [authType, setAuthType] = useState('signup');

  const changeAuthTypeHandler = () => {
    authType === 'signup' ? setAuthType('login') : null;
    authType === 'login' ? setAuthType('signup') : null;
  };
  return (
    <main>
      <Head>
        <title>{authType === 'signup' ? 'Sign Up' : 'Login'}</title>
        <meta
          name="description"
          content="Authenticate yourself for bookasura to complete your order."
        />
      </Head>
      <AuthForm
        signupType={authType}
        changeAuthTypeHandler={changeAuthTypeHandler}
      />
    </main>
  );
};

export default Auth;
