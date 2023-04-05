import React from 'react';
import { useRouteError } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

const Error = () => {
    const {data,status,statusText} = useRouteError()
    return (
        <div className='flex justify-center w-full h-screen items-center'>
            <div className='w-fit font-bold text-center'>
                <FontAwesomeIcon className='text-5xl text-red-500' icon={faTriangleExclamation} />
                <h1 className='text-6xl my-3 text-red-600'>{status}</h1>
                <h1 className='text-3xl'>{statusText}</h1>
                <h1 className='text-lg font-serif my-3'>{data}</h1>
            </div>
        </div>
    );
};

export default Error;