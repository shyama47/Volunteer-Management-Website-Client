
import axios from 'axios';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaSearch } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';

const AllVolunteerPost = () => {
    const initialData=useLoaderData();
    const [volunteerAllData,setVolunteerAllData] =useState(initialData)
    const [searchText,setSearchText] =useState('');
    const [selectedCategory,setSelectedCategory] =useState('')
    const handleSearch =async()=>{
 
   // sudu title er jonno:  const res= await axios.get(`https://assignment-11-server-khaki-alpha.vercel.app/searchPost?search=${searchText}`)
   //title r category er jonno  const res= await axios.get(`https://assignment-11-server-khaki-alpha.vercel.app/searchPost?title=${searchText}&category=${selectedCategory} `)
   // r eta hocche all category implement korar jonno
       const categoryQuery = selectedCategory === 'All' ? '' : `&category=${selectedCategory}`;
   const res= await axios.get(`https://assignment-11-server-khaki-alpha.vercel.app/searchPost?title=${searchText}${categoryQuery} `)
   //   .then(res=>{
   //      setVolunteerAllData(res.data)
   //   })
   // or
   return setVolunteerAllData (res.data);
}

    
    return (
       <div>
         <Helmet>
            <title>All volunteer || Page</title>
         </Helmet>
        <h1 className='text-center text-primary text-2xl mt-10 md:text-4xl font-extrabold mb-10 '>All volunteer need posts page</h1>
        {/* search control */}
        <div className='w-11/12 md:w-10/12 mx-auto mb-5 '>
        <div className='flex flex-col md:flex-row space-y-5 justify-between '>
        {/* title search */}
         <div className='relative flex  justify-between items-center flex-1 md:mr-16 mr-5'>
            <input type="search"
         placeholder='Search by post title...'
            className='text-primary font-medium border border-primary/80 focus:border-primary focus:outline-none focus:border-2 rounded-full w-full md:pl-6 pl-3 py-2'
            value={searchText}
         onChange={(e)=>setSearchText(e.target.value)}
         />
           <div onClick={handleSearch}  className='absolute right-0 top-0 bottom-0  md:pr-5 md:pl-10 pr-2 rounded-r-full md:bg-primary/100 cursor-pointer text-neutral-content py-2'> <FaSearch size={22}/></div>
         </div>
        {/* category search */}
        <div className='flex-1'>
         <select
         value={selectedCategory}
         className='text-primary font-medium border border-primary/80 px-3 py-2 rounded-lg focus:border-primary focus:outline-none focus:border-2 w-full'
         onChange={(e)=>setSelectedCategory(e.target.value)}
         onClick={handleSearch}
         >
            <option value="select a category..">Select a category</option>
            <option value="All">All category</option>
            <option value="Education">Education</option>
            <option value="animal welfare">animal welfare</option>
            <option value="social service">social service</option>
            <option value="healthcare">healthcare</option>
         </select>
        </div>
        </div>
        </div>
        <div className='w-11/12 md:w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 space-y-4 md:grid-cols-3 sm:gap-7 md:gap-10 mb-5 md:my-7 '>
        
        {
        volunteerAllData.map(volunteer =>
             <div key={volunteer._id} className='bg-base-100 p-5 md:p-5 shadow-2xl h-[380px] border border-primary/25 rounded-2xl transition-transform hover:scale-105 duration-500'>
            
                <img src={volunteer.thumbnail} className='w-full h-[180px] rounded-xl mb-5' alt="" />
           <div className='space-y-1'>
            <h1 className='text-lg md:text-xl font-bold'>{volunteer.title}</h1>
            <p className='text-gray-400'>{volunteer.category}</p>
            <p className='text-gray-400'>{volunteer.deadline}</p>
            <Link to={`/allVolunteer/details/${volunteer._id}`}>
            <button className='btn btn-primary w-full mt-2 '>View Detail</button>
            </Link>
           </div>
        </div>
        )
        }
     </div>
       </div>
    );
};

export default AllVolunteerPost;