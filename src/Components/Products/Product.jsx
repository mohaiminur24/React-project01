import React from 'react';

const Product = ({product}) => {
    const {name,image,price,rating,stock,date,color} = product;
    return (
        <div className='border rounded-md shadow-sm p-5 flex flex-col'>
            <img className='border object-cover w-full h-auto rounded-sm' src={image} alt=""/>
            <h1 className='font-bold text-2xl my-5'>{name}</h1>
            <h5 className='font-semibold'>Rating: ({rating})</h5>
            <h5>Date: {date}</h5>
            <h5>Color: {color}</h5>
            <h2 className='mb-5'>Price: ${price}</h2>
            <button className='px-5 py-2 w-fit mt-auto bg-yellow-500 rounded-md text-white'>Buy now</button>
        </div>
    );
};

export default Product;