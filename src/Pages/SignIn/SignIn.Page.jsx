import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.svg';

const SignInPage = () => (
  (
    <section className="auth-page">
      <header>
        <img src={Logo} alt="logo" className="logo" />
      </header>

      <main>
        <h2>Sign in</h2>
        <form action="" method="post">
          <input type="email" placeholder="Email" className="input" required />
          <input type="password" placeholder="Password" className="input" required />
          <div className="v-spacer" />
          <button type="submit" className="btn">Sign in</button>
        </form>
        <div className="center auth-nav">
          Don&apos;t have an account?
          <Link to="/register">
            Sign up
          </Link>
        </div>
      </main>

    </section>
  )
);

export default SignInPage;
