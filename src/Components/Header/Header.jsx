import React,{ useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'
import user from '../../../public/image/user-1.png'
import { AuthContext } from '../AuthProvider/AuthProvider';
const Header = () => {

const {user,logOut}=useContext(AuthContext);

const handleLogout=()=>{
    logOut()
    .then(result=>{})
    .catch(error=>console.error(error))
}

const location=useLocation()


    return (
        <nav className='flex'>
            <div className='title'>
            <h2 className='hotel-title'>KODE-RESTURANT</h2>
            </div>
        <div className='menu'>
        <Link  className={location.pathname==='/'?'link-style':'link'} to="/">Home</Link>
          <Link  className={location.pathname==='/login'?'link-style':'link'} to="/login">Login</Link>
          <Link  className={location.pathname==='/register'?'link-style':'link'} to="/register">Register</Link>
          <Link  className={location.pathname==='/blog'?'link-style':'link'} to='blog'>Blog</Link>
         {
            user && <button className='logout' onClick={handleLogout}>Logout</button>
         }
        </div> 
        <div className='nav-icon'>
            <img className='nav-img' src='/image/user-1.png'/>
        </div>
        </nav>
    );
};

export default Header;