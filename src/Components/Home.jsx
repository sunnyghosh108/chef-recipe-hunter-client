import React, { useEffect, useState } from 'react';
import './Home.css'
//import background from '../../public/image/restaurant-Template-1.jpg'
import Catagories from './Catagories/Catagories';

const Home = () => {

    const [category,setCategory]=useState([]);
    useEffect(()=>{
     fetch('https://chief-recipe-hunter-server-sunnyghosh108.vercel.app/category')
     .then(res=>res.json())
     .then (data=>setCategory(data))
     .catch(error=>console.error(error))
    },[])
    


    return (
        <div>
            <div className=''>
                
             <img className='background-home' src="http://kodeforest.net/wp-demo/foodcourt/wp-content/uploads/2016/06/banner-1.jpg"></img>
            </div>
            <div className='header'>
            <div className='details'>
            <div >
                <h4 className='text-1'>  Welcome to our Resturant</h4>
                <h1 className='text-2'>Amazing and Delicious Food</h1>
               <p className='text-3'> Our food's philosphy is Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, aliquam? <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptates?<br/>It is famous mostly for its long natural  and it ...</p>
               <button className='btn-book'> MORE DETAILS</button>
            </div>
            </div>
            
         </div>
         

     <div className='catagories'>
        
       {
        category.map(catagories =><Catagories key={catagories.picture} catagories={catagories}></Catagories>)
       }
       </div> 

       <div className='chef-info'>
       <div>
        <img className='chef-img' src="https://e7.pngegg.com/pngimages/492/898/png-clipart-chef-chef-thumbnail.png"/>
       </div>
         <div className='chef-details'>
          <h1>WHO WE ARE?</h1>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat a nihil officia dignissimos vitae quis deleniti distinctio autem, molestiae dicta, aliquid, fugiat fugit! Modi, commodi?</p>  
            <h3>WHAT WE DO!!</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum magnam nisi fugiat dolores asperiores accusamus voluptates? Autem soluta vel ex architecto similique. Explicabo odit ipsum in unde. Necessitatibus, quos quo?</p>
         </div>
         
       </div>
       <div className='chef-recipe-catagories'>
        <h2 className='recipe-text'>Our Favourite recipe</h2>
         
          <div className='recipes-info'>
           <div className='recipe-1'>
           <div>
            <img className='chef-recipe-image' src="http://kodeforest.net/wp-demo/foodcourt/wp-content/uploads/2016/06/re1-1600x900.jpg"/>
            <h4> This is special item</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem magni temporibus? Repudiandae vel consequuntur inventore, officiis dolorem sapiente expedita.</p>
           </div>
           </div>
           <div className='recipe-2'>
           <div>
           <img className='chef-recipe-image' src="http://kodeforest.net/wp-demo/foodcourt/wp-content/uploads/2016/06/hot-chocolate-1600x900.jpg"/>
           <h4> This is special item</h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem magni temporibus? Repudiandae vel consequuntur inventore, officiis dolorem sapiente expedita.</p>
           </div>
           </div>
          </div>          
         </div>
         <div className='testimony'>
         <h4 className='testimonial-text'>Our Testimonial</h4>
         <div className='testimonial'>
            <div className='testimony-1'>
              <div>
                <img className='happy-customer' src="http://kodeforest.net/wp-demo/foodcourt/wp-content/uploads/2016/06/testimonial2-150x150.jpg"/>
              </div>
              <div>
              <h4>Jhon Dea</h4>
              <h5>Happy Customer</h5>
              <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, est!"
                </p>
              </div>
            </div>
            <div className='testimony-1'>
                
              <div>
                <img className='happy-customer' src="http://kodeforest.net/wp-demo/foodcourt/wp-content/uploads/2016/06/1shutterstock_20605495-150x150.jpg"/>
              </div>
              <div>
              <h4>Sara Maria</h4>
              <h5>Happy Customer</h5>
              <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, est!"
                </p>
              </div>
            </div>

         </div>
         </div>
       
 </div>    
    );
};

export default Home;