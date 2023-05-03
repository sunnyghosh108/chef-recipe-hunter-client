import React from 'react';
import './Catagories.css'
import { Link } from 'react-router-dom';

const Catagories = ({catagories}) => {
    const{picture,name,years_of_experience,num_of_recipes,likes  }=catagories;
    console.log(catagories)
     

    return (
      
  
      <div className='card-item'>
        <div className='product'>
      <img src={picture} alt="" />
      <div className='product-info'>
          <h6 className='product-name'>  </h6>
          <p>CHEF NAME: {name}</p>
          <p>Experience of year:{years_of_experience}</p>
          <p> Number of recipes:{num_of_recipes}</p>
          <p>  {likes}</p>
      </div>
      < button className='btn-cart'>
          
      <p><Link className='link' to=''> Details</Link>  </p>
          </button>
  </div>
      </div>
      
    );
};

export default Catagories;