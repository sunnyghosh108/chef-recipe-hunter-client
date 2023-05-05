
import React from 'react';
 
import './Footer.css';
import fb from '../../../public/icons/fb.png'
import twitter from '../../../public/icons/twitter.png'
import youtube from '../../../public/icons/youtube.png'
const Footer = () => {
    return (
        <div className="foot"> 
    <div className='foot-data'>
         <div>
          <h3 className='footer-text'>About us</h3>
          
          <h2 className='footer-text'>  In Kicthen we do magic</h2>
          <h4 className='footer-text'> We are making best food in town</h4>
         </div>
         
         <div>
          <h4 className='footer-text'>Contact us</h4>
          <p className='footer-text'>Email:koderesturant321@gmail.com</p>
          <p className='footer-text'>Phone:+8920000001</p>
          <p className='footer-text'>Timing:Everyday 8am-0.00</p>
         </div>
         

     </div>   
        </div>
        

    );
};

export default Footer;