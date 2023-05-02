import React, { useEffect, useState } from 'react';
import './Home.css'
//import background from '../../public/image/restaurant-Template-1.jpg'
import Catagories from './Catagories/Catagories';

const Home = () => {

    const [category,setCategory]=useState([]);
    useEffect(()=>{
     fetch('http://localhost:5000/category')
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
               <button className='btn-book'> MORE INFO</button>
            </div>
            </div>
            
         </div>
         <div>

       





         </div>

     <div className='catagories'>
       {
        category.map(catagories =><Catagories key={catagories.picture} catagories={catagories}></Catagories>)
       }
       </div> 
 </div>    
    );
};

export default Home;