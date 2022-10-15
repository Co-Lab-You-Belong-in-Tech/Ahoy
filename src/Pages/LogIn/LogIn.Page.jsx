import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import './LogIn.styles.css';

const LogInPage = () => (
  (
    <section className="log-in-page">
      <img src={Logo} alt="logo" className="logo" />
      <h3 className="log-in-title">Enter Your Login details</h3>
      <input type="email" placeholder="Email" className="input" />
      <input type="password" placeholder="Password" className="input" />
      <Link to="/sign-up" className="log-in-link">Log In</Link>
    </section>
  )
);

export default LogInPage;
