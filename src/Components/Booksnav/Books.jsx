import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from './Book';

const Books = () => {
    const {books} = useLoaderData();
    return (
        <div className='grid grid-cols-4 gap-5'>
            {books && books.map((book,idx)=><Book key={idx} book={book}/>)}
        </div>
    );
};

export default Books;