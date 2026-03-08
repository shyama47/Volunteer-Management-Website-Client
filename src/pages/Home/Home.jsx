
import BannerSlider from '../../componets/BannerSlider';
import { NavLink, useLoaderData } from 'react-router';
import VolunteerNeedSection from '../../componets/VolunteerNeedSection';
import ExtraSection from '../../componets/ExtraSection';
import VolunteerTeamSection from '../../componets/VolunteerTeamSection';
import TeamPhotoGallery from '../../componets/TeamPhotoGallery ';
import {motion} from 'framer-motion'
import { Helmet } from 'react-helmet-async';
import ScrollToTop from '../ScrollToTop';
const Home = () => {
    const volunteerData =useLoaderData();
   //  console.log(volunteerData);
    return (
       <div>
         <Helmet>
            <title>Home || Page </title>
         </Helmet>
         <div>
          <BannerSlider></BannerSlider>
        </div>
        {/* volunteer need neow section */}
     <div>
        <motion.h1 initial={{scale:0}} animate={{scale:1,transition:{duration:2 }}} 
        className='text-base-content text-center text-3xl md:text-4xl font-extrabold mb-10'>Volunteer Needs Now Section</motion.h1>
        <div className='w-11/12 md:w-10/12 mx-auto grid grid-cols-1 space-y-4 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-5 md:mb-7'>
        {
        volunteerData.map(volunteer =><VolunteerNeedSection key={volunteer._id} volunteer={volunteer}></VolunteerNeedSection>)
        }
     </div>
     <NavLink to='/posts' className='flex items-center justify-center mb-10'>
        <button  className='bg-primary text-neutral-content px-16 py-5 text-xl font-bold rounded-full cursor-pointer transition-transform hover:scale-105 duration-500'>See more</button>
     </NavLink>
     </div>
     {/* extra section */}
     <TeamPhotoGallery></TeamPhotoGallery>
     <ExtraSection></ExtraSection>
     <VolunteerTeamSection></VolunteerTeamSection>
     <ScrollToTop></ScrollToTop>
       </div>

    );
};

export default Home;