import React from 'react'
import { Outlet } from 'react-router-dom'

function PreLoginLayout() {
    return (
        <div className='background-image'>
            <Outlet />
        </div>
    )
}

export default PreLoginLayout