import React from 'react';
import MyVolunteerPost from './MyVolunteerPost';
import MyVolunteerRequestPost from './MyVolunteerRequestPost';
import { Helmet } from 'react-helmet-async';

const ManageMyPost = () => {
    return (
        <div className='min-h-screen bg-base-100'>
          <Helmet>
            <title>ManageMyPost || Page</title>
          </Helmet>
            <h1 className='text-3xl text-center font-bold py-5 text-base-content'>Manage My Post</h1>
            {/* name of each tab group should be unique */}
<div className="tabs tabs-lift flex-col md:flex-row">
  <input type="radio" name="my_tabs_3" defaultChecked className="tab text-xl font-bold" aria-label="My volunteer post" />
  <div className="tab-content bg-base-100 border-base-300 text-base p-6">
    <MyVolunteerPost/>
    </div>

  <input type="radio" name="my_tabs_3" className="text-xl tab  font-bold" aria-label="My volunteer request post"/>
  <div className="tab-content bg-base-100 border-base-300 text-base p-6">
   <MyVolunteerRequestPost/>  
    </div>
</div>
        </div>
   
  );
};
export default ManageMyPost;