import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './Provider/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyVolunteerPost = () => {
    const {user}=useContext(AuthContext)
    
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
    const handleDelete = (Id) =>{

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
     axios.delete(`http://localhost:3000/delete/${Id}`)
    .then(res =>{
        console.log(res.data)
        console.log('deleted successfully')
        if(res.data.deletedCount){
            Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
   const remainingData = needPosts.filter(data => data._id !== Id)
   setNeedPosts(remainingData)
        }
    })
    .catch(error =>{
        console.log(error)
    })
    
  }
});
}
   

   
    return (
    <div className="w-11/12 md:w-10/12 mx-auto my-10">
  <h2 className="hidden md:block text-2xl font-bold mb-5 text-center md:text-left">My Volunteer Need Posts</h2>

  {/* Responsive scrollable container */}
  <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200">
    {needPosts.length>0 ? (
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
             <Link to={`/update/${post._id}`}>
              <button className="btn btn-sm btn-error ">Edit</button>
             </Link>
            </td>
            <td>
              <button onClick={()=>handleDelete(post._id)} className="btn btn-sm btn-warning  ">Delete</button>
            </td>
            
          </tr>
        ))}
      </tbody>
    </table>

    ):(
      <div className="p-10 text-center text-gray-800">
        <p className="text-xl font-medium">You haven’t posted any volunteer needs yet.</p>
        <p className="text-sm mt-1">Click “Add Volunteer Need” to create your first post.</p>
      </div>
    ) }
  </div>
</div>

    );
};

export default MyVolunteerPost;