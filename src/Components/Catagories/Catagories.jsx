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
          <p>{name}</p>
          <p>{years_of_experience}</p>
          <p>{num_of_recipes}</p>
          <p>{likes}</p>
      </div>
      < button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
          
      <p><Link className='link' to="/login"> Details</Link>  </p>
          </button>
  </div>
      </div>
    );
};

export default Catagories;