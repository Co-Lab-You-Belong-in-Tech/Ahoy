import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUpPage from './Pages/SignUp/SignUp.Page';
import SignInPage from './Pages/SignIn/SignIn.Page';

import './App.css';
import CreateProfile from './Pages/CreateProfile/CreateProfile.Page';
import ProfileComplete from './components/ProfileComplete/ProfileComplete.component';

function App() {
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
              <Route path="/register" element={<SignUpPage />} />
              <Route path="/create-profile" element={<CreateProfile />} />
              <Route index path="/" element={<SignInPage />} />
              <Route path="profile-complete" element={<ProfileComplete />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
