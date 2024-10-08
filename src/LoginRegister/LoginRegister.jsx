import { Fragment, useState } from 'react';
import './LoginRegister.css';
import LoginUI from './LoginUI';
import RegisterUI from './RegisterUI';

function LoginSignUp() {
    const [isLogin, setIsLogin] = useState(true);

    const registerHandler=()=>{
        setIsLogin(false);
        console.log("Inside register");
    }

    const loginHandler=()=>{
        setIsLogin(true);
        console.log("Inside Login")
    }

    return (
        <Fragment>
            <form>
                <div className="container">
                    <div className='card background-image'>
                        <div className='d-flex justify-content-center card login-card'>
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
                </div>
            </form>
        </Fragment>
    );
}


export default LoginSignUp;