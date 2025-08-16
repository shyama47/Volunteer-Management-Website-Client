import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from './Provider/AuthContext';
import { toast } from 'react-toastify';
import SocialLogin from './SocialLogin';
import { Helmet } from 'react-helmet-async';
// import { Helmet } from 'react-helmet-async';

const SignUp = () => {
    const {createUser,updateUser,setUser,user} =useContext(AuthContext)
	const location =useLocation();
	// console.log(location);
	const navigate =useNavigate();
    const handleSignUp =(e)=>{
        e.preventDefault();
        const from =e.target;
        const name =from.name.value;
        const email =from.email.value;
        const photo =from.photo.value;
        const password =from.password.value;
        // console.log(name,email,password,photo)
		if(password.length<6){
			toast.error('password must be equal or grater then 6')
			return;
		}
		if(!/[a-z]/.test(password)){
			toast.error('password must be contain at last one lower case letter')
			return;
		}
		if(!/[A-Z]/.test(password)){
			toast.error('password must be contain at last one upper case letter')
			return;
		}
        // create user
        createUser(email,password)
        .then(result =>{
            console.log(result.user)
			toast.success('user sign up successfully')
			updateUser({displayName :name,photoURL:photo})
			.then(() =>{
				setUser ({...user,displayName :name,photoURL:photo})
				navigate(location?.state || '/')
			})
			.catch(error=>{
				console.log(error)
				setUser(user)
			})
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className="flex justify-center items-center my-20">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl border border-primary/40 rounded-2xl">
      <div className="card-body">
			<Helmet>
				<title>signUp || page</title>
			</Helmet>
			<h2 className="mb-3 text-3xl font-semibold text-center">Create a new account</h2>
			<form onSubmit={handleSignUp} className="space-y-8">
				<div className="space-y-4">
					<div className="space-y-2">
						{/* name */}
						<label htmlFor="name" className="block text-sm">Name</label>
						<input type="text" name="name" id="name" placeholder="user name" required className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
					</div>
					<div className="space-y-2">
						{/* email */}
						<label htmlFor="email" className="block text-sm">Email address</label>
						<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" required className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
					</div>
					<div className="space-y-2">
						{/* photo url */}
						<label htmlFor="text" className="block text-sm">PhotoURL</label>
						<input type="text" name="photo" placeholder="Photo URL"  required className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
					</div>
					<div className="space-y-2">
						<div>
							{/* password */}
							<label htmlFor="password" className="text-sm">Password</label>
							<input type="password" name="password" id="password" required placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
						</div>
						<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50 mt-3 cursor-pointer transform transition-transform hover:scale-105 duration-500">Sign Up</button>
					</div>
				</div>
			</form>
            <SocialLogin></SocialLogin>
            <p className="text-sm text-center font-bold">Already have an account?
					<Link to='/signIn' className="underline font-medium text-base-content">Sign in here</Link>
				</p>
		</div>
        </div>
        </div>
    );
};

export default SignUp;