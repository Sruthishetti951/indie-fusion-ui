import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

function PreLoginLayout() {
    const {pathname} = useLocation();
    console.log(pathname);
    return (
        <div className={`${pathname !== '/' && 'background-image'}`}>
            <Outlet />
        </div>
    )
}

export default PreLoginLayout