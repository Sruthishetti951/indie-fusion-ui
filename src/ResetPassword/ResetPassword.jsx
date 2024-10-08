import { Fragment } from "react";

function ResetPassword(){
    return (
        <Fragment>
            <form>
                <div className="container">
                    <div className='card background-image'>
                        <div className='d-flex justify-content-center card login-card'>
                            <div>
                                <div className='d-flex justify-content-around mb-5'>
                                    <h4>Reset Password</h4>
                                </div>
                                <div>
                                    <Fragment>
                                        <div>
                                            <label htmlFor="oldPass" >Old Password</label>
                                        </div>
                                        <div className="mb-3">
                                            <input type="password" id="oldPass"  />
                                        </div>
                                    </Fragment>
                                    <Fragment>
                                        <div>
                                            <label htmlFor="newPass" >New Password</label>
                                        </div>
                                        <div className="mb-3">
                                            <input type="password" id="newPass" />
                                        </div>
                                    </Fragment>
                                    <Fragment>
                                        <div>
                                            <label htmlFor="confirmPass" >Confirm Password</label>
                                        </div>
                                        <div className="mb-3">
                                            <input type="password" id="confirmPass" />
                                        </div>
                                    </Fragment>
                                    <Fragment>
                                        <div className='text-center'>
                                            <button type="submit" className="btn btn-primary btn-color">Reset Password</button>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                        <i className="fa fa-long-arrow-left mt-1" aria-hidden="true"></i>
                                        <p className="fontSize">Back to Login</p>
                                        </div>
                                    </Fragment>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Fragment>
    );
}

export default ResetPassword