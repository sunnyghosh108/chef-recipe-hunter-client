import React, { useContext, useRef, useState } from 'react';
import{ GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'; 
import app from '../../firebase/firebase.config';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import './Login.css'
import { AuthContext } from '../AuthProvider/AuthProvider';
const auth =getAuth(app);

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }
   

    

    return (
        <div className='form-container'>
            <h2 className='form-title'>Please Login</h2>
            <form onSubmit={handleLogin}>
                <div className='form-control'>
                <input className='' type="email" name="email"  id="email" placeholder="Your email" required/><br/>
                </div>
                <div className='form-control'>
                <input className=''type="text" name="password" id="password" placeholder="Your password" required></input><br/>
                </div>
               
              <button > Login</button>
            </form>
            <div className=''>
            
           
            <p className='form-end'><small>New to this website? please<Link to="/register">Register</Link></small></p>

          
           <div className='social-icon'>
             <div>
             <p>  <FaGoogle> </FaGoogle></p>
             </div>
             <p> <FaGithub></FaGithub> </p>
           </div>
            </div>
        </div>
    );
};

export default Login;