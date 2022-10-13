import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { GrFacebookOption } from 'react-icons/gr';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './CreateAccount.styles.css';

const CreateAccount = () => (
  (
    <div className="create-account">
      <section className="first-column">
        <Logo className="logo" />
        <h2 className="create-account-title">Create Your Account</h2>
        <form className="register">
          <input
            type="email"
            placeholder="Email"
            className="client-input"
          />
          <input
            type="password"
            placeholder="password"
            className="client-input"
          />
          <button type="submit" className="sign-up-btn">Sign up</button>
        </form>
      </section>
      <section className="other-login">
        <div className="other-login-title">
          <div className="line" />
          <h4 className="other-title">or continue with</h4>
          <div className="line" />
        </div>
        <div className="login-options">
          <div className="login-icon">
            <GrFacebookOption />
          </div>
          <div className="login-icon">
            <FcGoogle />
          </div>
          <div className="login-icon">
            <p>A</p>
          </div>
        </div>
        <div className="logged">
          <p>
            Already have an account?
            <span className="sign-in-link">Sign in</span>
          </p>
        </div>
      </section>
    </div>
  )
);

export default CreateAccount;
