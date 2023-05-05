import React, { useContext, useRef, useState } from 'react';
import{ GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'; 
import app from '../../firebase/firebase.config';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import './Login.css'
import { AuthContext } from '../AuthProvider/AuthProvider';
const auth =getAuth(app);

const Login = () => {
     const provider=new GoogleAuthProvider()
     const githubProvider=new GithubAuthProvider()
    const { signIn,googleSignIn,githubSignIn} = useContext(AuthContext);
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
   
    const handleGoogle=()=>{
        googleSignIn(provider)
        .then(result=>{
            const googleUser=result.user;
            console.log(googleUser)
            navigate(from, { replace: true })
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    
    const handleGithub=()=>{
        githubSignIn(githubProvider)
        .then(result=>{
            const githubUser=result.user;
            console.log(githubUser)
            navigate(from, { replace: true })
        })
        .catch(error=>{
            console.log(error.message)
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
                <div className='form-control'>
                <button > Login</button> 
                </div>
               
              {/* <button > Login</button> */}
            </form>
            <div className=''>
            
           
            <p className='form-end'><small>New to this website? please<Link to="/register">Register</Link></small></p>

          
           <div className='social-icon'>
             <div>
             <p onClick={handleGoogle}>  <FaGoogle className='google'> </FaGoogle></p>
             </div>
             <p onClick={handleGithub}> <FaGithub className='github'></FaGithub> </p>
           </div>
            </div>
        </div>
    );
};

export default Login;