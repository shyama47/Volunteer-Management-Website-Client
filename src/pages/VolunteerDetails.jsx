import React from 'react';
import { Link, useLoaderData } from 'react-router';


const VolunteerDetails = () => {
  const post = useLoaderData(); 

  return (

   <div className="w-11/12 md:w-8/12 mx-auto my-10">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden p-8">
        {/* Thumbnail */}
        <img src={post.thumbnail} alt="Post Thumbnail" className="w-full h-60 object-cover rounded-md mb-6" />

        {/* Post Info */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-gray-800">{post.title}</h2>
          <p className="text-gray-700">{post.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
            <p><span className="font-semibold">Category:</span> {post.category}</p>
            <p><span className="font-semibold">Location:</span> {post.location}</p>
            <p><span className="font-semibold">Volunteers Needed:</span> {post.volunteers}</p>
            <p><span className="font-semibold">Deadline:</span> {post.deadline}</p>
            <p><span className="font-semibold">Organizer Name:</span> {post.userName}</p>
            <p><span className="font-semibold">Organizer Email:</span> {post.email}</p>
          </div>

          {/* Button */}
          <Link to={`/volunteer/${post._id}`}>
<button className="btn btn-primary mt-5 w-full hover:scale-105 transition-transform duration-300">
            Be a Volunteer
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VolunteerDetails;
