import React from 'react';
import { Link } from 'react-router-dom';

const EmptyState = ({message, address, label}) => {
    return (
        <div className='min-h-[calc(100vh-300px)] gap-5 flex flex-col justify-center items-center pb-16'>
            <p className='text-gray-600 text-xl lg:text-3xl'>{message}</p>
            <Link to="/" className="btn btn-primary">Go to Home pages</Link>
            
        </div>
    );
};

export default EmptyState;