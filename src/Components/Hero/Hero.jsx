import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Welcome to <br /> <span className='bg-gradient-to-r from-amber-500 to-amber-900 text-transparent bg-clip-text'>DarkWebsite</span> </h1>
                    <p className="py-6 text-yellow-950">Dark Website – The ultimate arsenal for warriors and collectors alike. A shadowed marketplace where precision meets power, delivering elite weaponry for those who demand dominance.</p>
                    <Link to="/service" className="btn btn-primary">Now Explore</Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;