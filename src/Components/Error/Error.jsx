import React from 'react';
import './Error.css';
 import error from '../../assets/error.jpg'
const Error = () => {
    return (
        
            <div className="not-found-container">
      <h1 className="not-found-header">Oops! Page not found</h1>
      <img className='error-img' src={error} alt="" />
      <p className="not-found-text">We're sorry, but the page you requested could not be found.</p>

      </div>
    );
};

export default Error;