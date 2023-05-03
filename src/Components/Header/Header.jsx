import React,{ useContext } from 'react';
import { Link } from 'react-router-dom';
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


    return (
        <nav className='flex'>
            <div className='title'>
            <h2 className='hotel-title'>KODE-RESTURANT</h2>
            </div>
        <div className='menu'>
        <Link   className='link-style' to="/">Home</Link>
          <Link className='link-style' to="/login">Login</Link>
          <Link className='link-style' to="/register">Register</Link>
          <Link className='link-style' to='blog'>Blog</Link>
         {
            user && <button className='logout' onClick={handleLogout}>Logout</button>
         }
        </div>
        <div>
            <img className='nav-img' src='../../../public/image/user-1.png'/>
        </div>
        </nav>
    );
};

export default Header;