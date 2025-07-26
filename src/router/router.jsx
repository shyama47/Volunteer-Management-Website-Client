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
export const router =createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'/add-post',
               element:<PrivateRoute>
                <AddVolunteer></AddVolunteer>
               </PrivateRoute>
            },
            {
                path:'posts',
                Component:AllVolunteerPost
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
            }
        ]
    }
])