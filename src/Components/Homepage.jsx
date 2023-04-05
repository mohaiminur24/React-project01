import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faTwitch, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Lottie from "lottie-react";
import animation from '../assets/46207-programmer.json';
import { useLoaderData } from 'react-router-dom';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';



const Homepage = () => {
    const deatils = useLoaderData();
    const data = deatils.Skill;

    
    return (
        <div>
            <div className='w-full h-[500px] grid grid-cols-2 justify-center items-center rounded-sm'>

                <div className='w-full mx-auto'>
                    <h1 className='text-5xl font-bold text-yellow-500 mb-3'>MohaiMinur rahman Mukta</h1>
                    <h2 className='text-2xl text-gray-500 font-semibold mb-2'>Font-End Website Developer</h2>
                    <p className='text-xs text-gray-500'>
                        As a frontend website developer, you play a crucial role in creating engaging, user-friendly, and visually appealing websites. Your job is to bring the designer's vision to life by writing code that ensures a seamless user experience across various devices and browsers.
                        To excel in your role, you need to have a strong grasp of HTML, CSS, and JavaScript, as well as a good understanding of web design principles and user experience. However, there's one aspect of web development that is often overlooked but can make a significant impact on the website's overall look and feel: typography.
                    </p>
                    <button className='px-10 py-2 animate-bounce text-lg border border-yellow-500 text-yellow-500 duration-150 my-5 rounded-md hover:scale-105'>Hire Me</button>
                </div>
                <Lottie className='w-fit block mx-auto' animationData={animation} loop={true} />

            </div>

            <div className='grid grid-cols-3 my-20 justify-center items-center'>
                <img className='w-fit h-auto border rounded-md' src="MohaiMinur.png" alt="" />
                <div className='col-span-2'>
                    <h1 className='text-3xl font-bold'>About Me</h1>
                    <p className='font-semibold text-gray-500'>Font-End Website Developer</p>
                    <p className='text-gray-400 text-xs font-thin my-5'>
                        Website development is the process of creating, designing, and           maintaining a website. It involves several stages, including planning, coding, testing, and deployment. Website developers use a variety of programming languages, tools, and technologies to create websites that are responsive, user-friendly, and visually appealing. <br/>

                        In today's digital age, having a website is crucial for businesses of all sizes. A well-designed website can help increase brand awareness, improve customer engagement, and drive sales. Website developers play a critical role in helping businesses establish an online presence that reflects their unique brand identity.
                        <br/> <br/>

                        Whether you're building a website for a small business or a large corporation, it's important to work with an experienced website developer who can help you navigate the complex world of web development. With their expertise, you can create a website that meets your business needs and helps you achieve your online goals.
                    </p>
                    <div className='flex gap-5 text-2xl my-5 text-yellow-500'>
                        <button className='border p-3 rounded-md shadow-sm hover:scale-105 duration-100'><FontAwesomeIcon title='facebook' icon={faFacebook} /></button>
                        <button className='border p-3 rounded-md shadow-sm hover:scale-105 duration-100'><FontAwesomeIcon title='GitHub' icon={faGithub} /></button>
                        <button className='border p-3 rounded-md shadow-sm hover:scale-105 duration-100'><FontAwesomeIcon title='Twitter' icon={faTwitch} /></button>
                        <button className='border p-3 rounded-md shadow-sm hover:scale-105 duration-100'><FontAwesomeIcon title='Linkdin' icon={faLinkedinIn} /></button> 
                    </div>
                </div>
            </div>
{/* skill section start */}
            <div className='my-10'>
                <h1 className='text-center font-bold text-3xl'>Professional Skill</h1>
                <p className='w-3/5 text-center text-xs my-3 text-gray-400 mx-auto'>It is essential for individuals to continuously invest in their skill development to stay competitive, adapt to changing environments, and unlock new opportunities for growth and advancement.</p>

                <div className='w-fit mx-auto my-10'>
                    <ComposedChart
                    width={800}
                    height={300}
                    data={data}
                    >
                        <Bar dataKey="parcent" barSize={70} fill='black'/>
                        <XAxis dataKey="title"/>
                        <YAxis/>
                        <Line type="monontone" dataKey="parcent" stroke='red'/>
                        <Tooltip/>
                    </ComposedChart>
                    <h1 className='text-center font-bold text-yellow-700'>My skill Level</h1>
                </div>

            </div>

        </div>
    );
};

export default Homepage;