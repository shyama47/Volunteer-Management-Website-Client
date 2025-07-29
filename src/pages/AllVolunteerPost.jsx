
import { Link, useLoaderData } from 'react-router';

const AllVolunteerPost = () => {
    const volunteerAllData=useLoaderData();
    return (
       <div>
        <h1 className='text-center text-3xl mt-10 md:text-4xl font-extrabold mb-10 '>All volunteer need posts page</h1>
        <div className='w-11/12 md:w-10/12 mx-auto grid grid-cols-1 space-y-4 md:grid-cols-3 md:gap-4 mb-5 md:my-7 '>
        {
        volunteerAllData.map(volunteer =>
             <div key={volunteer._id} className='bg-white p-5 md:p-3 shadow-xl h-[380px]'>
            
                <img src={volunteer.thumbnail} className='w-full h-[180px] rounded-xl mb-5' alt="" />
           <div className='space-y-1'>
            <h1 className='text-lg md:text-xl font-bold'>{volunteer.title}</h1>
            <p className='text-gray-400'>{volunteer.category}</p>
            <p className='text-gray-400'>{volunteer.deadline}</p>
            <Link to={`/allVolunteer/details/${volunteer._id}`}>
            <button className='btn btn-primary w-full mt-2 transition-transform hover:scale-105 duration-500'>View Detail</button>
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