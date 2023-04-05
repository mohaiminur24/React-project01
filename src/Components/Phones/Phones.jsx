import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Singlephone from './Singlephone';

const Phones = () => {
    const {data} = useLoaderData();
    return (
        <div className='grid grid-cols-4 gap-5'>
            {data.map((phone,idx)=> <Singlephone key={idx} phone={phone}></Singlephone>)}
        </div>
    );
};

export default Phones;