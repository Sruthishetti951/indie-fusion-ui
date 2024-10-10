import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import LoginRegister from './LoginRegister/LoginRegister';
// import ForgotPasswordUI  from './ForgotPassword/ForgotPasswordUI';
// import ResetPassword from './ResetPassword/ResetPassword';
// import NotFound from './not-found/NotFound';
const LoginRegister = lazy(() => import('./LoginRegister/LoginRegister'));
const ForgotPasswordUI = lazy(() => import('./ForgotPassword/ForgotPasswordUI'));
const ResetPassword = lazy(() => import('./ResetPassword/ResetPassword'));
const NotFound = lazy(() => import('./not-found/NotFound'));



function App() {
  return (
    <div className='background-image'>
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path='' element={<LoginRegister />} />
          <Route path='login' element={<LoginRegister />} />
          <Route path='forgot-password' element={<ForgotPasswordUI />} />
          <Route path='reset-password' element={<ResetPassword />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    </div>
  );
}

export default App;
