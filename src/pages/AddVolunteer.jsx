
import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from './Provider/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const AddVolunteer = () => {
  const { user } = useContext(AuthContext);
  const [deadline, setDeadline] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const resData = Object.fromEntries(formData.entries());

    const newVolunteer = {
      ...resData,
      volunteers: parseInt(resData.volunteers),
      deadline: deadline.toISOString().split('T')[0],
    //   deadline:deadline.toLocaleDateString(),
    };
//  2 vabei kora jai but .toISOString().split('T')[0] eta beshi safe cross-browser ও backend consistency er jonno
    // console.log("🚀 ~ handleSubmit ~ newVolunteer:", newVolunteer);
    axios.post('https://assignment-11-server-khaki-alpha.vercel.app/addVolunteer',newVolunteer)
    .then(res =>{
        console.log(res.data)
        Swal.fire({
  position: "top-end",
  icon: "success",
  title: "volunteer job post successfully added",
  showConfirmButton: false,
  timer: 1500
});
    })
    .catch(error =>{
        console.log(error);
    })
    form.reset();

  };

  return (
    <div className="max-w-11/12 md:max-w-7/12  bg-base-100 shadow-2xl rounded-xl my-10 p-6 md:p-10 mx-auto border border-primary/40">
      <Helmet>
        <title>AddVolunteer || Page</title>
      </Helmet>
      <h2 className="text-2xl font-bold mb-6 text-center">Add Volunteer Need Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 font-semibold">Thumbnail URL</label>
          <input type="text" name="thumbnail" placeholder="Thumbnail URL" className="border border-primary px-3 py-2 rounded-lg focus:border-blue-800 focus:outline-none focus:border-2 w-full" required />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Post Title</label>
          <input type="text" name="title" placeholder="Post Title" className="border border-primary px-3 py-2 rounded-lg focus:border-blue-800 focus:outline-none focus:border-2 w-full" required />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Description</label>
          <textarea name="description" placeholder="Description" className="border border-primary px-3 py-2 rounded-lg focus:border-blue-800 focus:outline-none focus:border-2 w-full" required></textarea>
        </div>

        <div>
          <label className="block mb-2 font-semibold">Category</label>
          <select name="category" className="border border-primary px-3 py-2 rounded-lg focus:border-blue-800 focus:outline-none focus:border-2 w-full" required>
            <option value="">Select a Category</option>
            <option value="healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="social service">Social Service</option>
            <option value="animal welfare">Animal Welfare</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-semibold">Location</label>
          <input type="text" name="location" placeholder="Location" className="border border-primary px-3 py-2 rounded-lg focus:border-blue-800 focus:outline-none focus:border-2 w-full" required />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Number of Volunteers Needed</label>
          <input type="number" name="volunteers" placeholder="Number of Volunteers Needed" className="border border-primary px-3 py-2 rounded-lg focus:border-blue-800 focus:outline-none focus:border-2 w-full" required min="1" />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Deadline</label>
          <DatePicker
            selected={deadline}
            onChange={(date) => setDeadline(date)}
            //  dateFormat="yyyy/MM/dd"
            className="border border-primary px-3 py-2 rounded-lg focus:border-blue-800 focus:outline-none focus:border-2 w-full"
            required
          />
        </div>

        {user && (
          <div>
            <label className="block mb-1 font-semibold">Organizer Name</label>
            <input type="text"   name="userName" value={user.displayName} readOnly className="border border-primary px-3 py-2 rounded-lg bg-blue-100 text-gray-500 w-full focus:border-blue-800 focus:outline-none focus:border-2" />
          </div>
        )}

        {user && (
          <div>
            <label className="block mb-1 font-semibold">Organizer Email</label>
            <input type="email"   name="email" value={user.email} readOnly className="border border-primary px-3 py-2 rounded-lg bg-blue-100 text-gray-500 w-full focus:border-blue-800 focus:outline-none focus:border-2" />
          </div>
        )}

        <button type="submit" className="btn btn-primary w-full transform transition-transform hover:scale-105 duration-300">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddVolunteer;

