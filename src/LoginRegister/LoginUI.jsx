import { Fragment } from "react";
import { Link } from "react-router-dom";

function LoginUI(props) {
    return (
        <Fragment>
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
                <div >
                    <label htmlFor="pass" >Password</label>
                </div>
                <div className="mb-3">
                    <input type="password" id="pass" />
                    <p className='text-end mt-2'><Link to={'/forgot-password'}>Forgot Password? </Link></p>
                </div>
                </Fragment>
                <Fragment>
                <div className="mb-3">
                    <input type="checkbox" id="cbox" />
                    <label htmlFor="cbox" className='ms-2'>Check me out</label>
                </div>
                </Fragment>
                <Fragment>
                <div className='text-center'>
                    <button type="button" className="btn btn-primary btn-color">Login</button>
                </div>
                </Fragment>
                <Fragment>
                <div className="d-flex justify-content-center">
                <p className='text-center mt-2'>Don't have an account? </p>
                    <button type="button" className="nav-link mt-2 link" onClick={()=>{props.registerHandler()}}>Register</button>
                </div>
                </Fragment>
                </div>
        </Fragment>
    )
}

export default LoginUI