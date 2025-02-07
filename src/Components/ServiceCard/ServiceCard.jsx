import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { getDetails } from '../../utils';


const ServiceCard = ({ data, deletable, handleDelete }) => {
    const { id, name, image, imported_from, price, quality } = data;

    const navigate = useNavigate();


    const handleButton = () =>{
        localStorage.setItem("cart", JSON.stringify([data]));
        // getDetails(data);
        navigate("/checkout");
        console.log(navigate);
    }
    
   
    return (
        // <Link to={'/data/${id}'}></Link>
        <div className='flex relative'>
            <div className="card hover:scale-105 hover:bg-secondary w-96 bg-red-300 shadow-2xl mx-12">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-yellow-700">{name}</h2>
                    <p> <span className='font-semibold'>Price:</span> {price}</p>
                    <p> <span className='font-semibold'>Quality:</span> {quality}</p>
                    <p> <span className='font-semibold'>Imported_from:</span> {imported_from}</p>
                    <div className="card-actions">
                        <Link to={`/data/${id}`}>
                            <button className='btn btn-primary'>More details</button>
                        </Link>
                        <button onClick={handleButton} className="btn btn-primary">Buy Now</button>
                    </div>
                </div>


            </div>
            {deletable && 
            <div onClick={ ()=> handleDelete(id) } className='absolute bg-primary hover:bg-success group cursor-pointer p-3 rounded-full hover:scale-105 -top-4 right-8'> <MdDeleteForever size={20} className='text-secondary group-hover:text-primary' />
                </div>}
            
        </div>
    );
};

export default ServiceCard;