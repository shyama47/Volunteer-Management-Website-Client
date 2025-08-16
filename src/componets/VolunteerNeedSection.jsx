import React from 'react';
import {motion} from 'framer-motion'
const VolunteerNeedSection = ({volunteer}) => {
   const {deadline,category,title,thumbnail} =volunteer;
    
    return (
        <motion.div 
        initial={{opacity:0,y:100}}
                whileInView={{opacity:1,y:0}}
                // viewport={{once:true,amount:0.5}}
                transition={{delay:0.2,duration:0.4}}
        className='bg-base-100 p-5 shadow-2xl h-[380px] border border-primary/25 rounded-2xl '>
            
                <img src={thumbnail} className='w-full h-[180px] rounded-xl mb-5' alt="" />
           <div className='space-y-1'>
            <h1 className='text-lg md:text-xl overflow-hidden font-bold'>{title}</h1>
            <p className='text-gray-400'>{category}</p>
            <p className='text-gray-400'>{deadline}</p>
            <button className='btn btn-primary w-full my-2 transition-transform hover:scale-105 duration-500'>View Detail</button>
           </div>
        </motion.div>
    );
};

export default VolunteerNeedSection;