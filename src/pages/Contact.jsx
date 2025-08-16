import React from 'react';
import image from '../assets/contact3.png'
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
    const handleSubmit =(e) =>{
        e.preventDefault();
        const from =e.target;
        const fromData =new FormData(from);
        const result =Object.fromEntries(fromData.entries());
        toast.success('Thanks for you contacting us')
        from.reset();
    }
    return (
       <div className="grid max-w-screen-xl grid-cols-1 gap-16 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12  text-black">
		<Helmet>
			<title>Contact || Page</title>
		</Helmet>
	<div className="flex flex-col justify-between items-center flex-1 rounded-2xl border-2 border-blue-700">
		<img src={image} alt="" className="p-6 h-52 md:h-[600px] w-full " />
	</div>
	<div className='flex-1 md:my-16'>
        <form onSubmit={handleSubmit} className="space-y-6">
            <h1 className='text-primary font-bold text-left  text-4xl'>Contact with us</h1>
		<div>
			<label className="block mb-2 font-medium text-sm text-base-content">Full name</label>
			<input  type="text" name='name' placeholder="Enter your name" className="border border-primary/40 px-3 py-2 rounded-lg focus:border-blue-800 focus:outline-none focus:border-2 w-full text-neutral-400" required />
		</div>
		<div>
			<label className="block mb-2 font-medium text-sm text-base-content">Email</label>
			<input name="email" type="email" placeholder='Enter your email' className="border border-primary/40 px-3 py-2 rounded-lg focus:border-blue-800 focus:outline-none focus:border-2 w-full text-neutral-400" required />
		</div>
		<div>
			<label  className="block mb-2 font-medium text-sm text-base-content">Message</label>
			<textarea name="message" rows="3" placeholder=' write your message...' className="border border-primary/40 px-3 py-2 rounded-lg focus:border-blue-800 focus:outline-none focus:border-2 w-full text-neutral-400" required></textarea>
		</div>
		<button type="submit" className="btn btn-primary w-full transform transition-transform hover:scale-105 duration-300">Send Message</button>
	</form>
    </div>
</div>
    );
};

export default Contact;