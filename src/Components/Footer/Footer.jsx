
import React from 'react';
 
import './Footer.css';
const Footer = () => {
    return (
        <div className="foot"> 
    <div className='foot-data'>
         <div>
          <h3 className='footer-text'>About us</h3>
          <p className='footer-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
          <h2 className='footer-text'>  In Kicthen we do magic</h2>
          <h4 className='footer-text'> We are making best food in town</h4>
         </div>
         <div>
           <h3 className='footer-text'> Daily Deals</h3>
           <img className='footer-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqtMf8ESFLbD7Vv7BMQY-AEuVpv_63PfqYeddpbi2wOcpsa3OnP9VMHJnRcGGvgBaieZw&usqp=CAU"></img>
          
           < img className='footer-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvFBZ86iiAAi4jH30ZTBrYeMHDQJ6hVtDjLmNcNKqdGfjnaFJqxdtwihoo6hPReDWUP0Q&usqp=CAU"></img>
           
         </div>
         <div>
          <h4 className='footer-text'>Contact us</h4>
          <p className='footer-text'>Addres:Newyork,California city</p>
          <p className='footer-text'>Email:koderesturant321@gmail.com</p>
          <p className='footer-text'>Phone:+8920000001</p>
          <p className='footer-text'>Timing:Everyday 8am-0.00</p>
         </div>
         
     </div>
            
        </div>
        

    );
};

export default Footer;