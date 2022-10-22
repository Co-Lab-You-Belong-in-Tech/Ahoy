import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import SignUpPage from './Pages/SignUp/SignUp.Page';
import SignInPage from './Pages/SignIn/SignIn.Page';

import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './Pages/Dashboard/Dashboard.Page';
import userSlice, { authenticateAsync } from './features/user/userSlice';

function App() {
  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(authenticateAsync(token))
        .unwrap()
        .catch(() => {
          toast.error('You need to login again!');
          dispatch(userSlice.actions.signOut());
        });
    } else {
      dispatch(userSlice.actions.setUnauthenticated());
    }
  }, []);

  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="hero-info">
          <h1>
            Open up
            <br />
            & meet
          </h1>
          <p>
            Let&apos;s find people around you who have similar interests and are open to meet.
          </p>
        </div>
        <div className="app">
          <BrowserRouter>
            <Routes>
              <Route path="/dashboard" element={<ProtectedRoute to={<Dashboard />} />} />
              <Route path="/users/register" element={<SignUpPage />} />
              <Route path="/users/sign-in" element={<SignInPage />} />
              <Route index path="/" element={(<SignInPage />)} />
            </Routes>
          </BrowserRouter>
        </div>
        <aside>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </aside>
      </div>
    </div>
  );
}

export default App;
