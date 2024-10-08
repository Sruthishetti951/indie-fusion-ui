import { Fragment } from "react";

function RegisterUI(props){
    return (
        <Fragment>
            <div>
            <Fragment>
                <div>
                    <label htmlFor="fname" >First Name</label>
                </div>
                <div className="mb-3">
                    <input type="text" id="fname" />
                </div>
                </Fragment>
                <Fragment>
                <div>
                    <label htmlFor="lname" >Last Name</label>
                </div>
                <div className="mb-3">
                    <input type="text" id="lname" />
                </div>
                </Fragment>
                <Fragment>
                <div>
                    <label htmlFor="uname">Username</label>
                </div>
                <div className="mb-3">
                    <input type="text" id="uname" />
                </div>
                </Fragment>
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
                </div>
                </Fragment>
                <Fragment>
                <div className='text-center'>
                    <button type="submit" className="btn btn-primary btn-color">Register</button>
                </div>
                </Fragment>
                <Fragment>
                <div className="d-flex justify-content-center">
                <p className='text-center mt-2'>Already have an account? </p>
                    <button className="nav-link mt-2 link" onClick={()=>{props.loginHandler()}}>Login</button>
                </div>
                </Fragment>
                </div>
        </Fragment>
    )
}

export default RegisterUI