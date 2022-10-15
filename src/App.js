import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUpPage from './Pages/SignUp/SignUp.Page';
import ProfilePage from './Pages/Profile/Profile.Page';
import LogInPage from './Pages/LogIn/LogIn.Page';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route index path="/" element={<LogInPage />} />
        <Route path="/create-profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
