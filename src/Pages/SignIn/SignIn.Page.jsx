import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Logo from '../../assets/logo.svg';
import { signinAsync } from '../../features/user/userSlice';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleInput = (e) => {
    if (e.target.id === 'email') {
      setEmail(e.target.value);
    } else if (e.target.id === 'password') {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signinAsync({ email, password }))
      .unwrap()
      .then(() => {
        toast.success('You are successfully logged in.');
        navigate('/dashboard');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <section className="auth-page">
      <header>
        <img src={Logo} alt="logo" className="logo" />
      </header>

      <main>
        <h2>Sign in</h2>

        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="input"
            onChange={handleInput}
            required
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="input"
            onChange={handleInput}
            required
          />
          <div className="v-spacer" />
          <button type="submit" className="btn">Sign in</button>
        </form>

        <div className="center auth-nav">
          Don&apos;t have an account?
          <Link to="/users/register">
            Sign up
          </Link>
        </div>
      </main>

    </section>
  );
};

export default SignInPage;
