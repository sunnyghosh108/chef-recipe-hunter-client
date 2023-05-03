import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import user from '../../../public/image/user-1.png'
const Header = () => {






    return (
        <nav className='flex'>
            <div className='title'>
            <h2 className='hotel-title'>KODE-RESTURANT</h2>
            </div>
        <div className='menu'>
        <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to='blog'>Blog</Link>
          
        </div>
        <div>
            <img className='nav-img' src={user}></img>
        </div>
        </nav>
    );
};

export default Header;