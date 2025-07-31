import axios from 'axios';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateMyVolunteerPost = () => {
    const loaderData =useLoaderData();
    const [deadline,setDeadline] =useState(new Date())
    const {title,location,_id} =loaderData;
    const handleUpdate = (e)=>{
    e.preventDefault();
    const form =e.target;
    const fromData =new FormData(form);
    const resData =Object.fromEntries(fromData.entries());
    const updateData ={...resData,deadline:deadline.toISOString().split('T')[0]}
   console.log(updateData);
   axios.put(`http://localhost:3000/update/${_id}`,updateData)
   .then(res =>{
    console.log(res.data)
   if(res.data. modifiedCount){
    Swal.fire({
  position: "top-end",
  icon: "success",
  title: "volunteer job post successfully updateed",
  showConfirmButton: false,
  timer: 1500
});
   }
   })
   .catch(error =>{
    console.log(error)
   })
    }
    return (
        <div className="max-w-11/12 md:max-w-7/12  bg-white shadow-2xl rounded-xl my-10 p-6 md:p-10 mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Add Volunteer Need Post</h2>
              <form onSubmit={handleUpdate} className="space-y-4">
        
                <div>
                  <label className="block mb-2 font-semibold">Post Title</label>
                  <input type="text" defaultValue={title} name="title" placeholder="Post Title" className="border border-blue-300 px-3 py-2 rounded-lg focus:border-blue-800 focus:outline-none focus:border-2 w-full" required />
                </div>
        
                <div>
                  <label className="block mb-2 font-semibold">Location</label>
                  <input type="text" defaultValue={location} name="location" placeholder="Location" className="border border-blue-300 px-3 py-2 rounded-lg focus:border-blue-800 focus:outline-none focus:border-2 w-full" required />
                </div>
                <div>
                    <label className='block mb-2 font-semibold'>Deadline</label>
                   <DatePicker
                   selected={deadline}
                   onChange={(date)=>setDeadline(date)}
                   className='border border-blue-300 px-3 py-2 rounded-lg focus:border-blue-800 focus:outline-none focus:border-2 w-full'
                   />
                </div>
                <button type="submit" className="btn btn-primary w-full transform transition-transform hover:scale-105 duration-300">
               Update post
                </button>
              </form>
            </div>
    );
};

export default UpdateMyVolunteerPost;