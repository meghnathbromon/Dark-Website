import React from 'react';
import Navbar from '../Navbar/Navbar';
import Home from '../../pages/Home/Home';
import Bookmarks from '../../pages/Bookmarks/Bookmarks';
import Service from '../../pages/Service/Service';
import About from '../../pages/About/About';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const MainLayouts = () => {
    return (
        <div>
            <div className='h-16'>
                <Navbar></Navbar>
            </div>

            <div className='min-h-[calc(100vh-300px)]'>
                <Outlet></Outlet>
            </div>

            {/* footer */}

            <Footer></Footer>

        </div>
    );
};

export default MainLayouts;