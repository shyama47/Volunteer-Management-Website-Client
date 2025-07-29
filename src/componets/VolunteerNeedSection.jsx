import React from 'react';

const VolunteerNeedSection = ({volunteer}) => {
   const {deadline,category,title,thumbnail} =volunteer;
    
    return (
        <div className='bg-white p-5 md:p-3 shadow-xl h-[380px]'>
            
                <img src={thumbnail} className='w-full h-[180px] rounded-xl mb-5' alt="" />
           <div className='space-y-1'>
            <h1 className='text-lg md:text-xl font-bold'>{title}</h1>
            <p className='text-gray-400'>{category}</p>
            <p className='text-gray-400'>{deadline}</p>
            <button className='btn btn-primary w-full my-2 transition-transform hover:scale-105 duration-500'>View Detail</button>
           </div>
        </div>
    );
};

export default VolunteerNeedSection;