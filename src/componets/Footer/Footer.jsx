import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
import volunLogo from '../../assets/volLogo.png'
import {delay, motion} from "framer-motion"

const Footer = () => {
    return (
       <footer className="border-t-2 border-gray-300">
        <div className='bg-base-100'>
	<div className="container flex flex-col justify-between py-10 px-10 mx-auto space-y-8 lg:flex-row lg:space-y-0  text-base-content">
		<motion.div 
		initial={{opacity:0,y:100}}
		whileInView={{opacity:1,y:0}}
		// viewport={{once:true,amount:0.5}}
		transition={{delay:0.2,duration:0.6}}

		className="lg:w-1/3">
				<div className='flex gap-3'>
					<img src={volunLogo} className='w-10 h-10 rounded-full' alt="" />
				<h1 className='text-3xl font-bold  '>Volunteer</h1>
				</div>
			<p className='mt-3 w-[300px] '>Volunteers are compassionate individuals who offer their time and effort to help others and make a positive impact—without expecting anything in return. </p>
		</motion.div>
		<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-4/6 sm:grid-cols-3">
			<motion.div 
			initial={{opacity:0,y:100}}
		whileInView={{opacity:1,y:0}}
		// viewport={{once:true,amount:0.5}}
		transition={{delay:0.4,duration:0.6}}

			className="flex flex-col space-y-3">
				<h3 className="text-xl font-medium underline ">More</h3>
				 <NavLink className='hover:underline'  to='/'> Home </NavLink>
                <NavLink  className='hover:underline' to='/add-post'>Add post</NavLink>
                <NavLink  className='hover:underline' to='/posts'>All post</NavLink>
                <NavLink  className='hover:underline' to='/manage-post'>My post</NavLink>
				<Link className=' hover:underline' to='/contact'>Contact Us</Link>
			</motion.div>
			
			<motion.div
			initial={{opacity:0,y:100}}
		whileInView={{opacity:1,y:0}}
		// viewport={{once:true,amount:0.5}}
		transition={{delay:0.6,duration:0.6}}

			 className="flex flex-col space-y-3">
				<h3 className="font-medium text-xl underline  ">Term</h3>
				<Link className='hover:underline' to='/privacy'>Privacy Policy</Link>
				<Link className='hover:underline' to='/terms'>Terms and Condition</Link>
			</motion.div>

			<motion.div
			initial={{opacity:0,y:100}}
		whileInView={{opacity:1,y:0}}
		// viewport={{once:true,amount:0.5}}
		transition={{delay:0.6,duration:0.6}}
			 className="space-y-3 ">
				<div className="font-medium text-xl underline ">Follow Us</div>
				<div className="flex justify-start space-x-3">
					<div className='bg-primary/100 rounded-full transfrom transition-transform duration-1000 hover:scale-110'>
								<NavLink to="https://www.facebook.com/shotondrila.shyama.2025"> <FaFacebookF className='w-[27px] h-[27px] text-base-100 p-1 ' /></NavLink>
							</div>
							<div className='rounded-full flex justify-center items-center transfrom transition-transform duration-1000 hover:scale-110 '>
								<NavLink to=""><FaLinkedin className='w-[25px] h-[25px] text-primary/100' /></NavLink>
							</div>
							<div className='flex justify-center items-center  rounded-full transfrom transition-transform duration-1000 hover:scale-110'>
								<NavLink to="https://github.com/shyama47"><FaGithub className='w-[25px] h-[25px] text-primary/100' /></NavLink>
							</div>
							</div>
							
			                 </motion.div>
		</div>
	</div>
    </div>
	<div className="py-6 text-sm text-center bg-primary text-neutral-content px-2">© 2025 Freelance Task Marketplace. All rights reserved.</div>
</footer>




    );
};

export default Footer;