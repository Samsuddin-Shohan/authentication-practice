import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='my-3'>
            <NavLink to='/'  className='link'>
                Home
            </NavLink>

            <NavLink to='/authentication' className='link'>
                Authentication
            </NavLink>
            <NavLink to='/authorization' className='link'>
                Authorization
            </NavLink>

        </div>
    );
};

export default Navbar;