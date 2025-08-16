import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../pages/Layout/MainLayout';
import Home from '../pages/Home/Home';
import AddVolunteer from '../pages/AddVolunteer';
import AllVolunteerPost from '../pages/AllVolunteerPost';
import ManageMyPost from '../pages/ManageMyPost';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import PrivateRoute from '../pages/Provider/PrivateRoute';
import ErrorPage from '../pages/ErrorPage';
import axios from 'axios';
import Loading from '../componets/Loading';
import VolunteerDetails from '../pages/VolunteerDetails';
import BeAVolunteer from '../pages/BeAVolunteer';
import UpdateMyVolunteerPost from '../pages/UpdateMyVolunteerPost';
import Contact from '../pages/Contact';
import Privacy from '../pages/Privacy';
import TermsAndCondition from '../pages/TermsAndCondition';

export const router =createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                index:true,
                Component:Home,
                loader:async()=>{
                const responce =await axios.get('https://assignment-11-server-khaki-alpha.vercel.app/limitVolunteer')
                  return responce.data
                },
                hydrateFallbackElement:<Loading></Loading>
            },
            {
                path:'/add-post',
               element:<PrivateRoute>
                <AddVolunteer></AddVolunteer>
               </PrivateRoute>,

            },
            {
                path:'posts',
                Component:AllVolunteerPost,
                loader:async()=>{
                    const responce =await axios.get('https://assignment-11-server-khaki-alpha.vercel.app/allVolunteer')
                    return responce.data
                },
                hydrateFallbackElement:<Loading></Loading>
               
            },
            {
                path:'allVolunteer/details/:volunteerId',
                element:<PrivateRoute>
                    <VolunteerDetails></VolunteerDetails>
                </PrivateRoute>,
                loader:async({params})=>{
               const responce =await axios.get(`https://assignment-11-server-khaki-alpha.vercel.app/allVolunteer/details/${params.volunteerId}`)
               return responce.data
                },
                 hydrateFallbackElement:<Loading></Loading>
            },
            {
                path:'volunteer/:id',
                element:<PrivateRoute>
                    <BeAVolunteer></BeAVolunteer>
                </PrivateRoute>,
                loader:async({params})=>{
               const responce =await axios.get(`https://assignment-11-server-khaki-alpha.vercel.app/allVolunteer/details/${params.id}`)
               return responce.data
                },
                 hydrateFallbackElement:<Loading></Loading>
            },
            {
                path:'update/:id',
                element:<PrivateRoute>
                    <UpdateMyVolunteerPost></UpdateMyVolunteerPost>
                </PrivateRoute>,
               loader:async({params})=>{
               const responce =await axios.get(`https://assignment-11-server-khaki-alpha.vercel.app/allVolunteer/details/${params.id}`)
               return responce.data
                },
                 hydrateFallbackElement:<Loading></Loading>
            },

            {
                path:'/manage-post',
               element:<PrivateRoute>
                <ManageMyPost/>
               </PrivateRoute>
            },
            {
                path:'signIn',
                Component:SignIn
            },
            {
                path:'signUp',
                Component:SignUp
            },
            {
                path:'contact',
                Component:Contact
            },
            {
                path:'privacy',
                Component:Privacy
            },
            {
                path:'terms',
                Component:TermsAndCondition
            }
        ]
    }
])