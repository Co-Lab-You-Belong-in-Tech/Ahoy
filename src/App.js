import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUpPage from './Pages/SignUp/SignUp.Page';
import SignInPage from './Pages/SignIn/SignIn.Page';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<SignUpPage />} />
        <Route index path="/" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
