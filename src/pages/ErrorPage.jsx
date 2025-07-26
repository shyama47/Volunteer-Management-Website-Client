import React from 'react';
// import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate =useNavigate();
    return (
        <div>
            {/* <Helmet>
                <title>Error || Page</title>
            </Helmet> */}
           <div className='flex justify-center items-center mt-16 '>
             <img className='w-full md:w-1/2' src="https://i.postimg.cc/3w0M5WmX/Screenshot-2025-07-26-172409.png" alt="" />
           </div>
            <div className='text-center space-y-3'>
                <h1 className='text-2xl font-bold'>Page Not Found</h1>
            <p>The page you are doesn't looking for exist or has been moved</p>
            <button onClick={()=>navigate('/')} className='px-5 py-2 rounded-full bg-blue-900 text-white cursor-pointer transform transition-transform hover:scale-110 duration-500'>Back To Home</button>
            </div>
        </div>
    );
};

export default ErrorPage;