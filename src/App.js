import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter,
  Routes, Route,
  Navigate,
} from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import userSlice, { authenticateAsync } from './features/user/userSlice';
import ProtectedRoute from './components/ProtectedRoute';
import SignUpPage from './Pages/SignUp/SignUp.Page';
import SignInPage from './Pages/SignIn/SignIn.Page';
import CreateProfile from './Pages/CreateProfile/CreateProfile.Page';
import FindMatch from './Pages/FindMatch/FindMatch.component';

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
              <Route exact path="/dashboard" element={<Navigate to="/dashboard/find-match" />} />
              <Route path="/dashboard/find-match" element={<ProtectedRoute to={<FindMatch />} />} />

              <Route path="/users/register" element={<SignUpPage />} />
              <Route path="/users/sign-in" element={<SignInPage />} />
              <Route path="/users/create-profile" element={<CreateProfile />} />
              <Route index path="/" element={<SignInPage />} />
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
