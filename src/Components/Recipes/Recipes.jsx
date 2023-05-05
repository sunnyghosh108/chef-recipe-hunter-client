import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './Recipes.css';
import toast, { Toaster } from 'react-hot-toast';
import LazyLoad from 'react-lazy-load';


const Recipes = () => {
  const [disable,setDisable]=useState(false);
  const [disable1,setDisable1]=useState(false);
  const [disable2,setDisable2]=useState(false);
  const notify = () => {
    setDisable(true)
    toast('This is my favorite recipe.');
  }  
  const notify1 = () => {
    setDisable1(true)
    toast('This is my favorite recipe.');
  }  
  const notify2 = () => {
    setDisable2(true)
    toast('This is my favorite recipe.');
  }  
 
  

const category=useLoaderData();
console.log(category)
const {id}=category;
category.recipes.forEach(function (recipe){
    return
})
    return (
        <div className='recipe-all-items'>
         
        <div className='card'>
        <figure>
        <LazyLoad height={762}>
            <img className='chef-images' src={category.picture} />
            </LazyLoad>
         </figure>
            <div className='card-body'>
              <h4 className='chef-name'> {category.name}</h4>
              <h5>{category.bio}</h5>
              <h4>Likes:{category.likes}</h4>
             
             
              
            </div>
        </div>
       
      
          <div className='recipes-all-card'> 
           <div className='recipe-item-1'>
           <h2>{category.recipes[0].name}</h2>
           <p>{category.recipes[0].ingredients[0]}</p>
           <p>{category.recipes[0].ingredients[1]}</p>
           <p>{category.recipes[0].ingredients[2]}</p>
           <p>{category.recipes[0].ingredients[3]}</p>
           <p>{category.recipes[0].cooking_method}</p>
           <p>Rating:{category.recipes[0].rating}</p>
           <div>
      <button  className='favorite' onClick={notify} disabled={disable}>Favorite</button>
      <Toaster />
    </div>
           </div>
           <div className='recipe-item-1'>
           <h2>{category.recipes[1].name}</h2>
           <p>{category.recipes[1].ingredients[0]}</p>
           <p>{category.recipes[1].ingredients[1]}</p>
           <p>{category.recipes[1].ingredients[2]}</p>
           <p>{category.recipes[1].ingredients[3]}</p>
           <p>{category.recipes[1].cooking_method}</p>
           <p>Rating:{category.recipes[1].rating}</p>
           <div>
      <button className='favorite' onClick={notify1} disabled={disable1}>Favorite</button>
      <Toaster />
    </div>
           </div>
           <div className='recipe-item-1'>
           <h2>{category.recipes[2].name}</h2>
           <p>{category.recipes[2].ingredients[0]}</p>
           <p>{category.recipes[2].ingredients[1]}</p>
           <p>{category.recipes[2].ingredients[2]}</p>
           <p>{category.recipes[2].ingredients[3]}</p>
           <p>{category.recipes[2].cooking_method}</p>
           <p>Rating:{category.recipes[2].rating}</p>
           <div>
      <button className='favorite' onClick={notify2} disabled={disable2}>Favorite</button>
      <Toaster />
    </div>
           </div>
           <div>
            
           </div>
          </div>
          
           
        </div>
    );
};

export default Recipes;