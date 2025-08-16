import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion'
const volunteerTeam = [
  {
    id: 1,
    name: "Rafiq Hasan",
    role: "Field Volunteer",
    location: "Dhaka",
    photo: "https://i.postimg.cc/59ZcS53W/Screenshot-2025-08-03-140733.png",
    quote: "Serving humanity is serving God.",
    joined: "Jan 2024"
  },
  {
    id: 2,
    name: "Sumaiya Akter",
    role: "Medical Assistant",
    location: "Sylhet",
    photo: "https://i.postimg.cc/BZ5brvwy/Screenshot-2025-08-03-112300.png",
    quote: "Helping people gives me purpose.",
    joined: "Mar 2023"
    
  },
  {
    id: 3,
    name: "Farzana Chowdhury ",
    role: "Education Support",
    location: "Chittagong",
    photo: "https://i.postimg.cc/XNZS519g/Screenshot-2025-08-03-140455.png",
    quote: "Every child deserves a chance to learn.",
    joined: "May 2023"
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    role: "Community Organizer",
    location: "Rajshahi",
    photo: "https://i.postimg.cc/hvnjJFhp/Screenshot-2025-08-03-105211.png",
    quote: "Together, we can build a better world.",
    joined: "Jul 2024"
  },
  {
    id: 5,
    name: "Tamanna Jahan",
    role: "Relief Coordinator",
    location: "Khulna",
    photo: "https://i.postimg.cc/3wPWT0hM/Screenshot-2025-08-03-104355.png",
    quote: "In every crisis, there's a chance to care.",
    joined: "Dec 2023"
  },
  {
    id: 6,
    name: "Tanvir Alam",
    role: "Volunteer Trainer",
    location: "Barisal",
    photo: "https://i.postimg.cc/8cbCMy6D/Screenshot-2025-08-03-104804.png",
    quote: "Empowering volunteers empowers change.",
    joined: "Feb 2024"
  }
];

const VolunteerTeamSection = () => {
  return (
    <section 
    // initial={{opacity:0,y:100}}
    //             whileInView={{opacity:1,y:0}}
    //             // viewport={{once:true,amount:0.5}}
    //             transition={{delay:0.6,duration:0.6}}
    className="w-11/12 md:w-10/12 mx-auto my-16">
      <h2 className="text-4xl font-bold text-center mb-10 text-base-content">
        Meet Our Volunteer Team
      </h2>

      {/* Team Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-10">
        <div >
          <div className="text-2xl font-bold text-primary ">
            <CountUp start={0} end={200} suffix='+' duration={3} enableScrollSpy />
          </div>
          <p className=' text-base-content'>Volunteers</p>
        </div>
        <div >
          <div className="text-2xl font-bold text-primary  ">
            <CountUp start={0} end={45} suffix='+' duration={5} enableScrollSpy />
          </div>
          <p className=' text-base-content'>Active This Month</p>
        </div>
        <div >
          <div className="text-2xl font-bold text-primary  ">
            <CountUp start={2000} end={3500} suffix='+' duration={3} enableScrollSpy />
          </div>
          <p className=' text-base-content'>Total Hours</p>
        </div>
        <div >
         <div className="text-2xl font-bold text-primary  ">
            <CountUp start={0} end={20} suffix='+' duration={7} enableScrollSpy />
          </div>
          <p className=' text-base-content'>Ongoing Projects</p>
        </div>
      </div>

      {/* Member Cards */}
      <motion.div
       initial={{opacity:0,y:100}}
                whileInView={{opacity:1,y:0}}
                // viewport={{once:true,amount:0.5}}
                transition={{delay:0.3,duration:0.6}}
       className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {volunteerTeam.map((member) => (
          <div key={member.id} className="bg-base-100 rounded-xl shadow-md p-5 hover:shadow-2xl transition border border-primary/40">
            <img
              src={member.photo}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto object-cover"
            />
            <h3 className="text-base-content mt-4 text-lg font-semibold text-center">{member.name}</h3>
            <p className="text-sm text-center text-neutral-400">{member.role}</p>
            <p className="text-sm text-center text-base-content">📍 {member.location}</p>
            <p className="mt-2 text-center text-sm italic">"{member.quote}"</p>
            <p className="mt-1 text-xs text-center text-neutral-400">Joined: {member.joined}</p>
          </div>
        ))}
      </motion.div>

      
    </section>
  );
};

export default VolunteerTeamSection;




