import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

const SignInPage = () => (
  (
    <section className="auth-page">
      <header>
        <img src={Logo} alt="logo" className="logo" />
      </header>
      <p className="center">Tap to <strong>find friends</strong> nearby</p>

    </section>
  )
);

export default SignInPage;
