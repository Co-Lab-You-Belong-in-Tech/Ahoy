import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Logo from '../../assets/logo.svg';

import { signupAsync } from '../../features/user/userSlice';

const SignUpPage = () => {
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
    dispatch(signupAsync({ email, password }))
      .unwrap()
      .then(() => {
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
        <h2>Create Your Account</h2>
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
          <button type="submit" className="btn">Sign up</button>
        </form>
        <div className="center auth-nav">
          Already have an account?
          <Link to="/users/sign-in">
            Log In
          </Link>
        </div>
      </main>
    </section>
  );
};

export default SignUpPage;
