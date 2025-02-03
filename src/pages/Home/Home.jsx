import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';

const Home = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-[calc(100vh-300px)]'>

            <Hero></Hero>

            <img className='h-full' src="/src/assets/image/business.jpg" alt="" />


        </div >
    );
};

export default Home;