import React, { useEffect } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import styles from './AuthLayout.module.css'
import Navbar from '../Navbar/Navbar';

function AuthLayout() {
    const navigate = useNavigate();
    useEffect(() => {
        const userId = localStorage.getItem('USER_ID');
        if (!userId) {
            navigate('/login');
        }
    }, []);

    return (
        <div className={styles["postContainer"]}>
            <Navbar />
            <div className={styles["main-posts"]}>

                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout