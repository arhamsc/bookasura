import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useReducer, useState } from 'react';
import { requestUrl } from '../../../../db/domain_url';

import styles from './AuthForm.module.css';

const formReducer = (state, action) => {
  if (action.type === 'name') {
    state.name = action.payload.name;
    return {
      ...state,
    };
  }
  if (action.type === 'email') {
    state.email = action.payload.email;
    return {
      ...state,
    };
  }
  if (action.type === 'password') {
    state.password = action.payload.password;
    return {
      ...state,
    };
  }
  if (action.type === 'cpassword') {
    state.cpassword = action.payload.cpassword;
    return {
      ...state,
    };
  }
  return state;
};

const AuthForm = ({ signupType, changeAuthTypeHandler }) => {
  const [formData, dispatchFormData] = useReducer(formReducer, {
    name: '',
    email: '',
    password: '',
    cpassword: '',
  });

  const signup = signupType === 'signup';
  const router = useRouter();

  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const setFormInputData = (event) => {
    dispatchFormData({
      type: event.target.name,
      payload: {
        [event.target.name]: event.target.value,
      },
    });
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    if (signup && formData.password !== formData.cpassword) {
      setShowError(true);
      return;
    }
    setIsLoading(true);
    let response;
    try {
      signup
        ? (response = await axios.post(
            requestUrl('api/auth/signup'),
            {
              name: formData.name,
              password: formData.password,
              email: formData.password,
            },
            {
              'Content-Type': 'application/json',
            },
          ))
        : (response = await axios.post(
            requestUrl('api/auth/login'),
            {
              email: formData.email,
              password: formData.password,
            },
            {
              'Content-Type': 'application/json',
            },
          ));
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('expiryDate', Date.now() + response.data.expiryTime);
      const timer = setTimeout(Date.now() + response.data.expiryTime);
      localStorage.setItem('timerId', timer);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
    router.replace(response.data.url);
  };

  return (
    <section className={styles.form}>
      <h1>{signup ? 'Sign Up' : 'Login'}</h1>
      <form onSubmit={formSubmitHandler}>
        {signup && (
          <div className={styles.name__input}>
            <label htmlFor="name ">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              onChange={setFormInputData}
              required
            />
          </div>
        )}
        <div className={styles.email__input}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={setFormInputData}
            required
          />
        </div>
        <div className={styles.password__input}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={setFormInputData}
            required
          />
          {showError && <p className={styles.error}>Passwords do not match</p>}
        </div>
        {signup && (
          <div className={styles.cpassword__input}>
            <label htmlFor="cpassword">Confirm Password</label>
            <input
              type="password"
              id="cpassword"
              name="cpassword"
              placeholder="Confirm Password"
              onChange={setFormInputData}
              required
            />
            {showError && (
              <p className={styles.error}>Passwords do not match</p>
            )}
          </div>
        )}
        <div>
          <button>
            {isLoading ? 'Loading...' : signup ? 'Sign Up' : 'Login'}
          </button>
        </div>
      </form>
      {signup && (
        <p className={styles.message}>
          Already have an account ?{' '}
          <button onClick={changeAuthTypeHandler}>Login</button>
        </p>
      )}
      {!signup && (
        <p className={styles.message}>
          Don&apos;t have an account ?
          <button onClick={changeAuthTypeHandler}>Sign Up</button>
        </p>
      )}
    </section>
  );
};

export default AuthForm;
