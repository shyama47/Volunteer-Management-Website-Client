import React, { useContext } from 'react';
import { AuthContext } from './Provider/AuthContext';
import { useLoaderData } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';


const BeAVolunteer = () => {
  const volunteer =useLoaderData();
    const {thumbnail,category,location,deadline,description,title,volunteers,email,userName} =volunteer;
    const {user} =useContext(AuthContext);
  
    const handleRequest = (e)=>{
        e.preventDefault();
        const from =e.target;
        const fromData =new FormData(from);
        const request =Object.fromEntries(fromData.entries());
       const volunteerRequest ={...request,status:"requested",postId:volunteer._id}
       axios.post('http://localhost:3000/addRequest',volunteerRequest).then(res=>{
        console.log(res.data)
        if(res.data.insertedId && res.data.modifiedCount){
          Swal.fire({
  position: "top-end",
  icon: "success",
  title: " request added volunteers count update",
  showConfirmButton: false,
  timer: 1500
}); }
       })
       .catch(error=>{
        console.log(error);
       })
    }
    return (
         <div className="w-11/12 md:w-8/12 mx-auto my-10">
      <form onSubmit={handleRequest} className="bg-white shadow-md p-6 rounded-lg space-y-4">
        {/* Read-only Inputs */}
        <div>
          <img src={thumbnail} alt=""  name="thumbnail" className="w-full h-56 object-cover rounded-lg" />
        </div>

                <div>
                  <label className="block mb-2 font-semibold">Post Title</label>
                  <input type="text" name="title" defaultValue={title} className="border border-blue-300 px-3 py-2 rounded-lg focus:border-blue-800 focus:outline-none focus:border-2 w-full  " required />
                </div>
        
                <div>
                  <label className="block mb-2 font-semibold">Description</label>
                  <textarea name="description" defaultValue={description} className="border border-blue-300 px-3 py-2 rounded-lg focus:border-blue-800 focus:outline-none focus:border-2 w-full resize-none" required></textarea>
                </div>
        
                <div>
                  <label className="block mb-2 font-semibold">Category</label>
                  <input type="text" name="category" defaultValue={category} className='border border-blue-300 px-3 py-2 rounded-lg focus:border-blue-800 focus:outline-none focus:border-2 w-full' readOnly/>
                </div>
        
                <div>
                  <label className="block mb-2 font-semibold">Location</label>
                  <input type="text"  name="location" defaultValue={location}  className="border border-blue-300 px-3 py-2 rounded-lg focus:border-blue-800 focus:outline-none focus:border-2 w-full" readOnly />
                </div>
        
                <div>
                  <label className="block mb-2 font-semibold">Number of Volunteers Needed</label>
                  <input type="number" name="volunteers" defaultValue={volunteers} className="border border-blue-300 px-3 py-2 rounded-lg focus:border-blue-800 focus:outline-none focus:border-2 w-full" readOnly min="1" />
                </div>
        
                <div>
                  <label className="block mb-2 font-semibold">Deadline</label>
                  <input type="text" name='deadline' defaultValue={deadline} className='border border-blue-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 w-full' readOnly />
                </div>
        
                  <div>
                    <label className="block mb-1 font-semibold">Organizer Name</label>
                    <input type="text" name='organizer-email'  defaultValue={userName} readOnly className="border border-blue-300 px-3 py-2 rounded-lg bg-blue-100 text-gray-500 w-full focus:border-blue-800 focus:outline-none focus:border-2 cursor-not-allowed" />
                  </div>
          
                  <div>
                    <label className="block mb-1 font-semibold">Organizer Email</label>
                    <input type="email" name='organizer-name' defaultValue={email} readOnly className="border border-blue-300 px-3 py-2 rounded-lg bg-blue-100 text-gray-500 w-full focus:border-blue-800 focus:outline-none focus:border-2 cursor-not-allowed" />
                  </div>
                  {/*  */}
                  {
                    user &&
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                      <div>
                      <label className='block mb-2 font-semibold'>Volunter Name</label>
                      <input type="text" value={user.displayName} name='volunteer-name' readOnly className='border border-blue-300 px-3 py-2 rounded-lg bg-blue-100 text-gray-500 w-full focus:border-blue-800 focus:outline-none focus:border-2 cursor-not-allowed'/>
                    </div>
                    <div>
                      <label className='block mb-2 font-semibold'>Volunter Email</label>
                      <input type="text" value={user.email} name='volunteer-email' readOnly className='border border-blue-300 px-3 py-2 rounded-lg bg-blue-100 text-gray-500 w-full focus:border-blue-800 focus:outline-none focus:border-2 cursor-not-allowed'/>
                    </div>
                    </div>
                  }
         
        <textarea
          className="border border-blue-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-800 focus:outline-none resize-none w-full"
          placeholder="Suggestion"
        name='suggestion'
        />

        <button type='submit' className="btn btn-primary w-full" >
          Request
        </button>
      </form>
    </div>
  );
};

export default BeAVolunteer;