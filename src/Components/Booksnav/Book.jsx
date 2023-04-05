import React from 'react';
import { Link, useNavigation } from 'react-router-dom';
import LoadingData from '../LoadingData';

const Book = ({book}) => {
    const navigation = useNavigation();
    if(navigation.state === 'loading'){
        return <LoadingData/>
    };
    const {image,price,title,subtitle,isbn13} =book;

    return (
        <div className='border p-5 rounded-md shadow-sm flex flex-col'>
            <img src={image} className='object-cover w-full shadow-sm'/>
            <h1 className='font-bold text-lg mt-4'>{title}</h1>
            <h2 className='text-sm text-gray-400'>{subtitle}</h2>
            <h3 className='font-semibold mb-4'>Price: {price}</h3>
            <Link to={`/books/${isbn13}`}><button className='px-5 py-2 bg-yellow-500 text-sm text-white font-semibold rounded-md shadow-sm mt-auto w-fit hover:scale-105 duration-200'>More Deatils</button></Link>
            
        </div>
    );
};

export default Book;