import React from 'react';

const ServiceCard = ({data}) => {
    const {id, name, image, imported_from, price, quality} = data;
    console.log(data);
    return (
        <div className="card w-96 bg-red-300 shadow-2xl mx-12">
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
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;