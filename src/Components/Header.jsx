import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';


const Header = () => {
    const [toggle, setToggle] = useState(true);
    return (
        <>
        <div className='md:w-11/12 w-full mx-auto h-20 flex items-center justify-around shadow-sm relative'>
            <h1 className='font-bold text-3xl'>Mohai<span className='text-yellow-500'>Minur</span></h1>
            <div className={`${toggle?'block':'hidden'} md:block`}>
                <ul className={`flex flex-col top-24 left-0 md:static md:flex-row text-center right-0 font-semibold gap-5 absolute`}>
                    <li className='hover:scale-105 hover:duration-200'>
                        <NavLink to="/" className={({isActive})=>(isActive?"text-yellow-500":'')}>Home</NavLink>
                    </li>
                    <li className='hover:scale-105 hover:duration-200'>
                        <NavLink to="/blog" className={({isActive})=>(isActive?"text-yellow-500":'')}>Blog</NavLink>
                    </li>
                    <li className='hover:scale-105 hover:duration-200'>
                        <NavLink to="/books" className={({isActive})=>(isActive?"text-yellow-500":'')}>Books</NavLink>
                    </li>
                    <li className='hover:scale-105 hover:duration-200'>
                        <NavLink to="/product" className={({isActive})=>(isActive?"text-yellow-500":'')}>Product</NavLink>
                    </li>
                </ul>
            </div>

            <div className='block md:hidden'>
                <button onClick={()=>{setToggle(!toggle)}}>{
                    toggle?<XMarkIcon className='w-6 h-6 block'/>:<Bars3Icon className='w-6 h-6 block'/>
                }</button>
            </div>
            
        </div>
        </>
    );
};

export default Header;