import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Profile from './Profile/profile';
import AuthLayout from './AuthLayout/AuthLayout';
import PreLoginLayout from './PreLoginLayout/PreLoginLayout';
import MyProfilePage from './MyProfilePage/MyProfilePage';
import { ToastContainer } from 'react-toastify';

const LoginRegister = lazy(() => import('./LoginRegister/LoginRegister'));
const ForgotPasswordUI = lazy(() => import('./ForgotPassword/ForgotPasswordUI'));
const ResetPassword = lazy(() => import('./ResetPassword/ResetPassword'));
const Dashboard = lazy(() => import('./Dashboard/Dashboard'));
const Create=lazy(()=>import('./Create/Create'))
const NotFound = lazy(() => import('./not-found/NotFound'));



function App() {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path='' element={<PreLoginLayout />}>
              <Route index element={<LoginRegister />} />
              <Route path='login' element={<LoginRegister />} />
              <Route path='forgot-password' element={<ForgotPasswordUI />} />
            </Route>
            <Route path='' element={<AuthLayout />}>
              <Route index element={<Dashboard />} />
              <Route path='reset-password' element={<ResetPassword />} />
              <Route path='profile-update' element={<Profile />} />
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='create' element={<Create />} /> 
              <Route path='create/:postId' element={<Create />} /> 
              <Route path='my-profile-page' element={<MyProfilePage/>} /> 
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
