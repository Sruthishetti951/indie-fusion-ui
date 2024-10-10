import { Fragment, useState } from 'react';
import './LoginRegister.css';
import LoginUI from './LoginUI';
import RegisterUI from './RegisterUI';

function LoginSignUp() {
    const [isLogin, setIsLogin] = useState(true);

    const registerHandler=()=>{
        setIsLogin(false);
    }

    const loginHandler=()=>{
        setIsLogin(true);
    }

    return (
        <Fragment>
            <form>
                <div className="container container-card">
                        <div className='d-flex justify-content-center login-card'>
                            <div>
                                <div className='d-flex justify-content-around mb-5'>
                                    <ul className="nav nav-pills nav-fill">
                                        <li className="nav-item">
                                            <button type="button"  className={`nav-link ${isLogin ? 'btn-color' : ''}`}
                                            onClick={()=>loginHandler()}>Login</button>
                                        </li>
                                        <li className="nav-item">
                                            <button type="button" className={`nav-link btn-link ${!isLogin ? 'btn-color' : ''}`}
                                            onClick={()=>registerHandler()}>Register</button>
                                        </li>
                                    </ul>
                                </div>
                                { isLogin ? <LoginUI registerHandler={registerHandler}/> : 
                                <RegisterUI loginHandler={loginHandler}/>}  
                            </div>
                        </div>
                </div>
            </form>
        </Fragment>
    );
}


export default LoginSignUp;