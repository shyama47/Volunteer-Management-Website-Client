import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './Provider/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyVolunteerRequestPost = () => {
    const {user} =useContext(AuthContext);
    const [requestUser,setRequestUser] =useState([]);
    useEffect(()=>{
   axios.get(`http://localhost:3000/volunnteerRequestPost?email=${user.email}`)
   .then(res=>{
    setRequestUser(res.data)
    
   })
   .catch(error=>{
    console.log(error);
   })
    },[user?.email])
    // request cancel 
    const handleCancelRequest = (id)=>{
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
  
}).then((result) => {
  if (result.isConfirmed) {
      axios.delete(`http://localhost:3000/request/delete/${id}`)
      .then(res =>{
       console.log(res.data)
       console.log('cancel succesfully')
       if(res.data.deletedCount){
     Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
     const remainingData = requestUser.filter(data => data._id !== id)
   setRequestUser(remainingData)
       }
      })
    .catch(error =>{
    console.log(error)
   })
  }
});
   
    }
    return (
        <div className='w-11/12 md:max-w-10/12 mx-auto my-10'>
            <h1 className='hidden md:block text-2xl font-bold text-center md:text-left mb-5'>My Volunteer Request Post</h1>
            <div className='overflow-x-auto border border-gray-200 shadow-md rounded-lg'>
                {
                    requestUser.length > 0 ? (
                <table className='w-full table text-sm md:text-base'>
                    <thead className='bg-gray-200 text-gray-700'>
                        <tr>
                            <th>Title</th>
                            <th>Location</th>
                            <th>Deadline</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody >
                        {requestUser.map(user =>
                            <tr key={user._id} className='border-b-2 last:border-b-0 '>
                    <td>{user.title}</td>
                    <td>{user.location}</td>
                    <td>{user.deadline}</td>
                    <td>{user.status}</td> 
                    <td>
                        <button onClick={()=>handleCancelRequest(user._id)} className="btn btn-sm btn-accent">Cencel</button>
                        </td>                     
                            </tr>
                        )}
                    </tbody>
                </table>
                    ):(
                       <div className="p-10 text-center text-gray-800">
        <p className="text-xl font-medium">You haven’t requested to volunteer for any posts yet</p>
        <p className="text-sm mt-1">Browse volunteer opportunities and send a request to join</p>
      </div> 
                    )
                }
            </div>
        </div>
    );
};

export default MyVolunteerRequestPost;