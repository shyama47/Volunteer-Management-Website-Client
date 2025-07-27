
// import React, { useContext, useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import 'react-toastify/dist/ReactToastify.css';
// import { AuthContext } from './Provider/AuthContext';

// const AddVolunteer = () => {
//   const { user } = useContext(AuthContext);
//   const [deadline, setDeadline] = useState(new Date());

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = new FormData(form);
//     const rawData = Object.fromEntries(formData.entries());

//     const newVolunteer = {
//       ...rawData,
//       volunteers: parseInt(rawData.volunteers),
//       deadline: deadline.toISOString().split('T')[0],
//     //   deadline:deadline.toLocaleDateString(),
//     };
// //  2 vabei kora jai but .toISOString().split('T')[0] eta beshi safe cross-browser ও backend consistency er jonno
//     console.log("🚀 ~ handleSubmit ~ newVolunteer:", newVolunteer);
//     form.reset();
//   };

//   return (
//     <div className="w-full max-w-3xl mx-auto bg-white shadow-2xl rounded-xl my-10 p-6 md:p-10">
//       <h2 className="text-2xl font-bold mb-6 text-center">Add Volunteer Need Post</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block mb-2 font-semibold">Thumbnail URL</label>
//           <input type="text" name="thumbnail" placeholder="Thumbnail URL" className="border border-blue-300 px-3 py-2 rounded-lg focus:border-blue-800 focus:outline-none focus:border-2 w-full" required />
//         </div>

//         <div>
//           <label className="block mb-2 font-semibold">Post Title</label>
//           <input type="text" name="title" placeholder="Post Title" className="border border-blue-300 px-3 py-2 rounded-lg focus:border-blue-800 focus:outline-none focus:border-2 w-full" required />
//         </div>

//         <div>
//           <label className="block mb-2 font-semibold">Description</label>
//           <textarea name="description" placeholder="Description" className="border border-blue-300 px-3 py-2 rounded-lg focus:border-blue-800 focus:outline-none focus:border-2 w-full" required></textarea>
//         </div>

//         <div>
//           <label className="block mb-2 font-semibold">Category</label>
//           <select name="category" className="border border-blue-300 px-3 py-2 rounded-lg focus:border-blue-800 focus:outline-none focus:border-2 w-full" required>
//             <option value="">Select a Category</option>
//             <option value="healthcare">Healthcare</option>
//             <option value="education">Education</option>
//             <option value="social service">Social Service</option>
//             <option value="animal welfare">Animal Welfare</option>
//           </select>
//         </div>

//         <div>
//           <label className="block mb-2 font-semibold">Location</label>
//           <input type="text" name="location" placeholder="Location" className="border border-blue-300 px-3 py-2 rounded-lg focus:border-blue-800 focus:outline-none focus:border-2 w-full" required />
//         </div>

//         <div>
//           <label className="block mb-2 font-semibold">Number of Volunteers Needed</label>
//           <input type="number" name="volunteers" placeholder="Number of Volunteers Needed" className="border border-blue-300 px-3 py-2 rounded-lg focus:border-blue-800 focus:outline-none focus:border-2 w-full" required min="1" />
//         </div>

//         <div>
//           <label className="block mb-2 font-semibold">Deadline</label>
//           <DatePicker
//             selected={deadline}
//             onChange={(date) => setDeadline(date)}
//             //  dateFormat="yyyy/MM/dd"
//             className="border border-blue-300 px-3 py-2 rounded-lg focus:border-blue-800 focus:outline-none focus:border-2 w-full"
//             required
//           />
//         </div>

//         {user && (
//           <div>
//             <label className="block mb-1 font-semibold">Organizer Name</label>
//             <input type="text"   name="userName" value={user.displayName} readOnly className="border border-blue-300 px-3 py-2 rounded-lg bg-blue-100 text-gray-500 w-full focus:border-blue-800 focus:outline-none focus:border-2" />
//           </div>
//         )}

//         {user && (
//           <div>
//             <label className="block mb-1 font-semibold">Organizer Email</label>
//             <input type="email"   name="email" value={user.email} readOnly className="border border-blue-300 px-3 py-2 rounded-lg bg-blue-100 text-gray-500 w-full focus:border-blue-800 focus:outline-none focus:border-2" />
//           </div>
//         )}

//         <button type="submit" className="btn btn-primary w-full transform transition-transform hover:scale-105 duration-300">
//           Add Post
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddVolunteer;

