import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';

const Bookindo = () => {
    const navigation = useNavigation();
    const bookinfo = useLoaderData()
    console.log(bookinfo);
    const {authors,desc,image,language,pages,price,publisher,title,rating,subtitle,url,year}= bookinfo;
    return (
        <div className='flex justify-center items-center w-full h-full'>
            <img src={image} alt="" />
            <div>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <h3>Author:{authors}</h3>
                <h4>Publisher: {publisher}</h4>
                <p>{desc}</p>
                <h4>Langugage:{language}</h4>
                <h4>Pages: {pages}</h4>
                <h4>Price: {price}</h4>
                <h4>Rating: {rating}</h4>
                <h4>Url: {url}</h4>
                <h4>year:{year}</h4>
            </div>
            
        </div>
    );
};

export default Bookindo;