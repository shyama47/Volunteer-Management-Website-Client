import React from 'react';
import Navbar from '../../componets/Navbar/Navbar';
import Footer from '../../componets/Footer/Footer'
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
       <div className='bg-blue-50'>
         <div>
            <Navbar></Navbar>
        <div className='min-h-[calc(100vh-372px)] '>
            <Outlet></Outlet>
        </div>
            <Footer></Footer>
        </div>
       </div>
    );
};

export default MainLayout;