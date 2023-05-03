import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Recipes = () => {

const categoryData=useLoaderData();


    return (
        <div>
           
            <h2> This category:{categoryData.length}</h2>
            
        </div>
    );
};

export default Recipes;