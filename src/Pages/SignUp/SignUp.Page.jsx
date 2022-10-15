import React from 'react';
import { Link } from 'react-router-dom';
import { GrFacebookOption, GrGoogle } from 'react-icons/gr';
import { BiShow } from 'react-icons/bi';
import Logo from '../../assets/logo.svg';
import './SignUp.Page.styles.css';

const SignUpPage = () => (
  (
    <div className="sign-up">
      <section className="log-in">
        <img src={Logo} alt="logo" className="logo" />
        <h3 className="log-in-title">Create Your Account</h3>
        <input type="email" placeholder="Email" className="input" />
        <div className="input-container">
          <input type="password" placeholder="Password" className="contained-input" />
          <div className="icon-container">
            <BiShow size="30" />
          </div>
        </div>
        <input type="password" placeholder="Confirm Password" className="input" />
        <Link to="/create-profile" className="sign-up-link">Sign up</Link>
      </section>

      <section className="other-login">
        <div className="other-login-title">
          <div className="line" />
          <h5 className="continue">or continue with</h5>
          <div className="line" />
        </div>
        <div className="other-login-options">
          <div className="media-link">
            <GrFacebookOption />
          </div>
          <div className="media-link">
            <GrGoogle />
          </div>
          <div className="media-link">
            <p>A</p>
          </div>
        </div>
        <div className="sign-in-option">
          <h5 className="sign-in-title">
            Already have an account
            <Link className="sign-in-link" to="/">
              Log In
            </Link>
          </h5>
        </div>
      </section>
    </div>
  )
);

export default SignUpPage;
