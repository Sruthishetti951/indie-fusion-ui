import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css';
function Navbar() {
    const getActiveStyles = ({isActive}) => {
        if (isActive) {
            return {
                color: 'grey',
                fontWeight: 'bold',
            }
        }
    }

    const logoutHandler = () => {
        localStorage.clear();

    }
    return (
        <div className={styles["side-nav-bar"]}>
            <div className='mb-5'>
                <p className={`${styles["title"]}`}>Indie Fusion</p>
            </div>
            <div className='text-center'>
                <div>
                    <NavLink to='/dashboard' className={`d-flex ${styles['remove-anchor-defaults']}`} style={getActiveStyles}>
                        <div className={`d-flex ${styles['nav-containers']}`}>
                            <i className={`fa fa-home ${styles["icon-name-font"]}`} aria-hidden="true"></i>
                            <p className={styles["nav-names"]}>Home</p>
                        </div>
                    </NavLink>
                </div>

                <div>
                    <NavLink to='/my-profile-page' className={`d-flex ${styles['remove-anchor-defaults']}`} style={getActiveStyles}>
                        <div className={`d-flex ${styles['nav-containers']}`}>
                            <i className={`fa fa-user ${styles["icon-name-font"]}`} aria-hidden="true"></i>
                            <p className={styles["nav-names"]}>Profile </p>
                        </div>
                    </NavLink>
                </div>


                <div>
                    <NavLink to='/profile-update' className={`d-flex ${styles['remove-anchor-defaults']}`} style={getActiveStyles}>
                        <div className={`d-flex ${styles['nav-containers']}`}>
                            <i className={`fa fa-wrench ${styles["icon-name-font"]}`} aria-hidden="true"></i>
                            <p className={styles["nav-names"]}>Profile Setting</p>
                        </div>
                    </NavLink>
                </div>

                <div>
                    <NavLink to='/create' className={`d-flex ${styles['remove-anchor-defaults']}`} style={getActiveStyles}>
                        <div className={`d-flex ${styles['nav-containers']}`}>
                            <i className={`fa fa-plus-circle ${styles["icon-name-font"]}`} aria-hidden="true"></i>
                            <p className={styles["nav-names"]}>Create</p>
                        </div>
                    </NavLink>
                </div>

                {/* <div>
                    <NavLink to='' className={`d-flex ${styles['remove-anchor-defaults']}`} style={getActiveStyles}>
                        <div className={`d-flex ${styles['nav-containers']}`}>
                            <i className={`fa fa-search ${styles["icon-name-font"]}`} aria-hidden="true"></i>
                            <p className={styles["nav-names"]}>Search</p>
                        </div>
                    </NavLink>
                </div> */}

                {/* <div>
                    <NavLink to='' className={`d-flex ${styles['remove-anchor-defaults']}`} style={getActiveStyles}>
                        <div className={`d-flex ${styles['nav-containers']}`}>
                            <i className={`fa fa-handshake-o ${styles["icon-name-font"]}`} aria-hidden="true"></i>
                            <p className={styles["nav-names"]}>Collab Request</p>
                        </div>
                    </NavLink>
                </div> */}

                {/* <div>
                    <NavLink to='' className={`d-flex ${styles['remove-anchor-defaults']}`} style={getActiveStyles}>
                        <div className={`d-flex ${styles['nav-containers']}`}>
                            <i className={`fa fa-bell ${styles["icon-name-font"]}`} aria-hidden="true"></i>
                            <p className={styles["nav-names"]}>Notification</p>
                        </div>
                    </NavLink>
                </div> */}

                <div>
                    <NavLink to='/reset-password' className={`d-flex ${styles['remove-anchor-defaults']}`} style={getActiveStyles}>
                        <div className={`d-flex ${styles['nav-containers']}`}>
                            <i className={`fa fa-key ${styles["icon-name-font"]}`} aria-hidden="true"></i>
                            <p className={styles["nav-names"]}>Reset Password</p>
                        </div>
                    </NavLink>
                </div>
            </div>

            <div>
                <NavLink to='/login' onClick={logoutHandler} className={`d-flex ${styles['remove-anchor-defaults']}`} style={getActiveStyles}>
                    <div className={`d-flex ${styles['nav-containers']}`}>
                        <i className={`fa fa-sign-out ${styles["icon-name-font"]}`} aria-hidden="true"></i>
                        <p className={styles["nav-names"]}>Logout</p>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar