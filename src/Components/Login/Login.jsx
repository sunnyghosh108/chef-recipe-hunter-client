import React, { useRef, useState } from 'react';
import{ GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'; 
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';
import './Login.css'
const auth =getAuth(app);

const Login = () => {
    const [error,setError]= useState('');

   const [success,setSuccess]=useState('');

   
   



   const emailRef=useRef();
    
   const handleSubmit=(event)=>{
         //1.prevent page refresh
          event.preventDefault();
          setSuccess('');
          setError('');
          //2.collect from data
          const email=event.target.email.value;
          const password=event.target.password.value;
           console.log(email,password)
           //validate
           if(password.length<6){
            setError('please add at least 6 characters in your password ')
            return;
          } 

           

           //3. create user in firebase
           createUserWithEmailAndPassword(auth,email,password)
          .then(result =>{
            const loggedUer=result.user;
            console.log(loggedUer);
            setError('');
            event.target.reset();
            setSuccess('User has been created successfully')
          })
          .catch(error=>{
            console.error(error);
            setError(error.message)
            
          })
   }
    const handleEmailChange=(event)=>{
        console.log(event.target.value)
        // setEmail(event.target.value);
       
    }
    const handlePasswordBlur=(event)=>{
        console.log(event.target.value);

        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
          const loggedUser=result.user;
          console.log(loggedUser);
          setSuccess('user login successful.')
          setError('');
          
        })
        .catch(error=>{
            setError(error.message);

        })
    }
// google
   

    const handleResetPassword = event=>{
     const email=emailRef.current.value;
     if(!email){
     alert('please provide your email address to reset password')
     return;
    }
    sendPasswordResetEmail(auth,email)
    .then(()=>{
        alert('please check your email')
    })
    .catch(error=>{
        console.log(error);
        setError(error.message)
    })
    }


    return (
        <div className='form-container'>
            <h2 className='form-title'>Please Login</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                <input className='' onChange={handleEmailChange} type="email" name="email" ref={emailRef} id="email" placeholder="Your email" required/><br/>
                </div>
                <div className='form-control'>
                <input className='' onBlur={handlePasswordBlur} type="text" name="password" id="password" placeholder="Your password" required></input><br/>
                </div>
               <div className='form-control'>
              <input className='' type="submit" value="Register" /> <br/>
              </div>
             
            </form>
            <div className=''>
            <p><small>Forget password? please<button onClick={handleResetPassword} className='btn'>Reset Password</button></small></p>
            <p className='form-end'><small>New to this website? please<Link to="/register">Register</Link></small></p>
            <p className=''>{error}</p>
            <p className='text'>{success}</p>
            </div>
        </div>
    );
};

export default Login;