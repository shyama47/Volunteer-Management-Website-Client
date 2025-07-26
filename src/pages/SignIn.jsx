import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';

import { toast } from 'react-toastify';
import { AuthContext } from './Provider/AuthContext';
import SocialLogin from './SocialLogin';
// import { Helmet } from 'react-helmet-async';

const SignIn = () => {
	const {signIn} =useContext(AuthContext)
	const location =useLocation();
	console.log(location);
	const navigate =useNavigate();
    const from =location.state || '/';
    const handleSignIn =(e)=>{
        e.preventDefault();
        const email =e.target.email.value;
        const password =e.target.password.value;
        console.log(email,password);
		// signIn
		signIn(email,password)
		.then(result=>{
			console.log(result.user)
			navigate(from)
              toast.success('user successfully signIn')
		})
		.catch(error =>{
			console.log(error)
		})
    }
    return (
         <div className="hero bg-base-300 min-h-screen">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
         <h1 className="text-5xl font-bold">Sign In now!</h1>
        <form onSubmit={handleSignIn}>
            <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral">Sign In</button>
        </fieldset>
        </form>
       <div>
         <SocialLogin from={from}></SocialLogin>
       </div>
        <p className="text-sm text-center dark:text-gray-600">Dont have account?
		<Link to='/signUp'  className="underline">Sign up here</Link>
	</p>
      </div>
    </div>
  </div>

    );
};


export default SignIn;