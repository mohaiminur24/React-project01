import React from 'react';

const Singlephone = ({phone}) => {
    const {brand,image,phone_name,slug} = phone
    return (
        <div className='border p-5 rounded-md'>
            <img src={image} alt="" />
            <h1 className='font-bold text-2xl my-2'>{phone_name}</h1>
            <h2>Brand: {brand}</h2>
            <h3>{slug}</h3>
        </div>
    );
};

export default Singlephone;