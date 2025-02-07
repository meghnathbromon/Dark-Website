import React from 'react';

const About = () => {
    return (
        <div className='min-h-[calc(100vh-300px)] gap-3 flex flex-col justify-center items-center p-16'>
            <h1 className='text-4xl font-bold text-accent'>Welcome to My Profile</h1>
            <img className='w-100 rounded-full ' src="/src/assets/image/profilePic.jpg" alt="" />
            <h1 className='font-bold text-3xl text-amber-300 bg-rose-600 p-5 rounded-full hover:bg-sky-400'>Author: Mir Mehrab Hossain Olin </h1>
            <div className='bg-success p-9'>
                <h1 className='text-2xl font-bold'>Information</h1>
                <address>
                    <p>Studing at dept. of CSE, Islamic University ,Bangladesh</p>
                    <p>Mobile No: 01*********</p>
                    <p>Adress: Jhenida, Dhaka, Bangladesh</p>
                </address>
            </div>
            <p className=' border-0  p-6 bg-secondary'>Welcome to DarkWebsite, where style meets innovation. We are more than just an online store—we are a destination for trendsetters, tech enthusiasts, and those who seek the extraordinary. With a passion for [your niche, e.g., fashion, gadgets, digital products, etc.], we curate high-quality products that enhance your lifestyle. Our commitment to excellence ensures that every item is carefully selected to meet the highest standards.</p>


        </div>
    );
};

export default About;