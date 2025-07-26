import React from 'react';
import { RotatingLines } from 'react-loader-spinner';


const Loading = () => {
    return (
        <div className='flex justify-center items-center mx-auto  my-20'>
            <RotatingLines strokeColor='blue'/>
        </div>
    );
};

export default Loading;