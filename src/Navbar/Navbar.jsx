import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css';
function Navbar() {
    const getActiveStyles = ({ isActive }) => {
        if (isActive) {
            return {
                color: '#853ff1',
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
                    <NavLink to='/create' className={`d-flex ${styles['remove-anchor-defaults']}`} style={getActiveStyles}>
                        <div className={`d-flex ${styles['nav-containers']}`}>
                            <i className={`fa fa-plus-circle ${styles["icon-name-font"]}`} aria-hidden="true"></i>
                            <p className={styles["nav-names"]}>Create Post</p>
                        </div>
                    </NavLink>
                </div>

                <div>
                    <NavLink to='' className={`d-flex ${styles['remove-anchor-defaults']}`} style={getActiveStyles}>
                        <div className={`d-flex ${styles['nav-containers']}`}>
                            <i className={`fa fa-search ${styles["icon-name-font"]}`} aria-hidden="true"></i>
                            <p className={styles["nav-names"]}>Search</p>
                        </div>
                    </NavLink>
                </div>

                <div>
                    <NavLink to='/groups' className={`d-flex ${styles['remove-anchor-defaults']}`} style={getActiveStyles}>
                        <div className={`d-flex ${styles['nav-containers']}`}>
                            <i className={`fa fa-users ${styles["icon-name-font"]}`} aria-hidden="true"></i>
                            <p className={styles["nav-names"]}>Groups</p>
                        </div>
                    </NavLink>
                </div>

                <div>
                    <NavLink to='/events' className={`d-flex ${styles['remove-anchor-defaults']}`} style={getActiveStyles}>
                        <div className={`d-flex ${styles['nav-containers']}`}>
                            <i className={`fa fa-calendar ${styles["icon-name-font"]}`} aria-hidden="true"></i>
                            <p className={styles["nav-names"]}>Events</p>
                        </div>
                    </NavLink>
                </div>

                <div>
                    <NavLink to='/collab-request' className={`d-flex ${styles['remove-anchor-defaults']}`} style={getActiveStyles}>
                        <div className={`d-flex ${styles['nav-containers']}`}>
                            <i className={`fa fa-handshake-o ${styles["icon-name-font"]}`} aria-hidden="true"></i>
                            <p className={styles["nav-names"]}>Collab Request</p>
                        </div>
                    </NavLink>
                </div>

                <div>
                    <NavLink to='/notifications' className={`d-flex ${styles['remove-anchor-defaults']}`} style={getActiveStyles}>
                        <div className={`d-flex ${styles['nav-containers']}`}>
                            <i className={`fa fa-bell ${styles["icon-name-font"]}`} aria-hidden="true"></i>
                            <p className={styles["nav-names"]}>Notifications</p>
                        </div>
                    </NavLink>
                </div>
                <div className='pb-3'>
                    <hr />
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
                            <p className={styles["nav-names"]}>Account Settings</p>
                        </div>
                    </NavLink>
                </div>
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