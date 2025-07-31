import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './Provider/AuthContext';
import axios from 'axios';

const MyVolunteerRequestPost = () => {
    const {user} =useContext(AuthContext);
    const [requestUser,setRequestUser] =useState([]);
    useEffect(()=>{
   axios.get(`http://localhost:3000/volunnteerRequestPost?email=${user.email}`)
   .then(res=>{
    setRequestUser(res.data)
    console.log(res.data)
   })
   .catch(error=>{
    console.log(error);
   })
    },[user?.email])
    return (
        <div className='w-11/12 md:max-w-10/12 mx-auto my-10'>
            <h1 className='hidden md:block text-2xl font-bold text-center md:text-left mb-5'>My Volunteer Request Post</h1>
            <div className='overflow-x-auto bg-white shadow-md rounded-lg'>
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
                        <button className="btn btn-sm btn-accent">Cencel</button>
                        </td>                     
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyVolunteerRequestPost;