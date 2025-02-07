import React, { useEffect, useState } from 'react';

const Checkout = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    const handlePayment = () => {
        alert("Payment Successful! 🚀");
        localStorage.removeItem("cart");
        setCart([]);
    };


    return (
        <div className="p-8 text-white bg-gray-900 min-h-[calc(100vh-300px)]">
            <h1 className="text-2xl mb-4">Checkout</h1>
            {cart.length > 0 ? (
                <div>
                    {cart.map((item, index) => (
                        <div key={index} className="p-4 mb-4 bg-gray-800 rounded-lg">
                            <h2 className="text-xl">{item.name}</h2>
                            <p>Price:{item.price}</p>
                        </div>
                    ))}
                    <button
                        onClick={handlePayment}
                        className="bg-green-600 px-4 py-2 rounded-lg mt-4 hover:bg-green-800">
                        Pay Now
                    </button>
                </div>
            ) : (
                <p>No items in cart.</p>
            )}
        </div>
    );
};

export default Checkout;