import { Fragment } from "react";
import './ForgotPasswordUI.css';
import { Link } from "react-router-dom";

function ForgotPasswordUI() {
    return (
        <Fragment>
            <form>
                <div className="container container-card">
                        <div className='d-flex justify-content-center card login-card'>
                            <div>
                                <div className='d-flex justify-content-around mb-5'>
                                    <h4>Forgot Password?</h4>
                                </div>
                                <div>
                                    <Fragment>
                                        <div>
                                            <label htmlFor="email" >Email</label>
                                        </div>
                                        <div className="mb-3">
                                            <input type="email" id="email" />
                                        </div>
                                    </Fragment>
                                    <Fragment>
                                        <div className='text-center'>
                                            <button type="submit" className="btn btn-primary btn-color">Reset Password</button>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                        <i className="fa fa-long-arrow-left mt-1" aria-hidden="true"></i>
                                        <p className="fontSize"><Link to={'/login'}>Back to Login</Link></p>
                                        </div>
                                    </Fragment>
                                </div>
                            </div>
                        </div>
                    </div>
            </form>
        </Fragment>
    );
}

export default ForgotPasswordUI