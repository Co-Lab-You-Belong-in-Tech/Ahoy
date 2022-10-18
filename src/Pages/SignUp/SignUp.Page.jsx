import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

const SignUpPage = () => (
  (
    <section className="auth-page">
      <header>
        <img src={Logo} alt="logo" className="logo" />
      </header>

      <main>
        <h2>Create Your Account</h2>
        <form action="" method="post">
          <input type="email" placeholder="Email" className="input" required />
          <input type="password" placeholder="Password" className="input" required />
          <div className="v-spacer" />
          <button type="submit" className="btn">Sign up</button>
        </form>
        <div className="center auth-nav">
          Already have an account?
          <Link to="/">
            Log In
          </Link>
        </div>
      </main>
    </section>
  )
);

export default SignUpPage;
