import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Productss = () => {
    const {products} = useLoaderData()
    
    return (
        <div className='grid grid-cols-3 gap-5'>
            {products && products.map((product,index)=><Product key={index} product={product}></Product>)}
        </div>
    );
};

export default Productss;