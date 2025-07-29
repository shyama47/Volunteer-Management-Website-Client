
import BannerSlider from '../../componets/BannerSlider';
import { NavLink, useLoaderData } from 'react-router';
import VolunteerNeedSection from '../../componets/VolunteerNeedSection';

const Home = () => {
    const volunteerData =useLoaderData();
    
    return (
       <div>
         <div>
          <BannerSlider></BannerSlider>
        </div>
     <div>
        <h1 className='text-center text-3xl md:text-4xl font-extrabold mb-10'>Volunteer Needs Now Section</h1>
        <div className='w-11/12 md:w-10/12 mx-auto grid grid-cols-1 space-y-4 md:grid-cols-3 md:gap-4 mb-5 md:mb-7'>
        {
        volunteerData.map(volunteer =><VolunteerNeedSection key={volunteer._id} volunteer={volunteer}></VolunteerNeedSection>)
        }
     </div>
     <NavLink to='/posts' className='flex items-center justify-center mb-10'>
        <button  className='bg-blue-900 text-white px-16 py-5 text-xl rounded-full cursor-pointer transition-transform hover:scale-105 duration-500'>See more</button>
     </NavLink>
     </div>
       </div>

    );
};

export default Home;