import { ChevronLeftIcon } from '@heroicons/react/16/solid';
import React from 'react';
import { IoBookmarkSharp } from 'react-icons/io5';
import { useLoaderData } from 'react-router-dom';
import { saveDetail } from '../../utils';

const Details = () => {
    const details = useLoaderData();
    console.log(details);

    const handleBookmark = details => {
        saveDetail(details)
    }
    return (
        <div className='bg-gray-400 py-7'>
            <h1 className='text-6xl font-serif mx-auto border-2 rounded-2xl lg:w-200 p-5 bg-orange-100 mb-8 text-center'>Name: {details.name}</h1>
            <div className='flex flex-col items-center gap-8'>
                <div className=' bg-amber-950'>
                    <img className='w-150 h-full p-4' src={details.image} alt="" srcset="" />
                </div>
                <div className='border-0 rounded-4xl p-10 bg-neutral-600'>
                    <p className='text-3xl font-semibold'>Titile: {details.title}</p>
                    <p className='text-2xl mt-4'>Description: {details.description}</p>
                    <p className='text-xl'>Price: {details.price}</p>



                    <button onClick={() => handleBookmark(details)} className=' mt-4 btn btn-primary'>Add to card <IoBookmarkSharp size={30} className='text-secondary' /></button>




                </div>

            </div>

            <input type="text" name="" placeholder='Give a comment' id="" />


        </div>
    );
};

export default Details;