import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './Provider/AuthContext';
import axios from 'axios';

const MyVolunteerPost = () => {
    const {user}=useContext(AuthContext)
    console.log(user.email)
    const [needPosts,setNeedPosts] =useState([])
    useEffect(()=>{
        axios.get(`http://localhost:3000/myVolunteerPost?email=${user.email}`)
        .then(res=>{
            setNeedPosts(res.data)
        })
        .catch(error=>{
            console.log(error);
        })
    },[user?.email])
    return (
    <div className="w-11/12 md:w-10/12 mx-auto my-10">
  <h2 className="hidden md:block text-2xl font-bold mb-5 text-center md:text-left">My Volunteer Need Posts</h2>

  {/* Responsive scrollable container */}
  <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200">
    <table className="table w-full text-sm md:text-base">
      <thead className="bg-gray-300 text-gray-700">
        <tr>
          <th>Title</th>
          <th>Location</th>
          <th>Deadline</th>
          <th className="text-center" colSpan={2}>Actions</th>
        </tr>
      </thead>

      <tbody>
        {needPosts.map((post) => (
          <tr key={post._id} className=" border-b-2 last:border-b-0 ">
            <td>{post.title}</td>
            <td>{post.location}</td>
            <td>{post.deadline}</td>
            
                <td>
              <button className="btn btn-sm btn-error ">Edit</button>
            </td>
            <td>
              <button className="btn btn-sm btn-warning  ">Delete</button>
            </td>
            
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    );
};

export default MyVolunteerPost;