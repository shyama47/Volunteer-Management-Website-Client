import React from 'react';
import { Helmet } from 'react-helmet-async';
const privacyContent =[
    {
        id:1,
        title:"1. Information We Collect",
        description:"We collect personal information such as name, email address, phone number, and volunteer preferences when users register or use certain features of the platform."
    },
    
    {
        id:2,
        title:"2. How We Use Your Data",
        description:"We use the collected data to manage accounts, communicate with users, match volunteers with suitable opportunities, and improve our platform’s functionality and user experience."
    },
    {
        id:3,
        title:"3. Sharing of Information",
        description:"We do not sell, trade, or rent users’ personal information to third parties. Information may only be shared when legally required or with explicit user consent."
    },
    {
        id:4,
        title:"4. Cookies and Tracking Technologies",
        description:"Our website may use cookies and similar tracking technologies to personalize user experience and analyze website usage. Users can disable cookies via their browser"
    },
    {
        id:5,
        title:"5. Data Protection and Security",
        description:"We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or destruction."
    },
    {
        id:6,
        title:"6. Children’s Privacy",
        description:"Our platform is not intended for children under the age of 13. We do not knowingly collect personal information from anyone under 13 years of age."

    },
    {
        id:7,
        title:"7. User Control and Data Deletion",
        description:"Users may contact us to request access to their data or to delete their account and associated personal information permanently."
    }
]

const Privacy = () => {
    return (
        <div className='w-11/12 md:w-10/12 mx-auto my-10'>
            <Helmet>
                <title>Privacy || Page</title>
            </Helmet>
            <h1 className='text-2xl font-bold text-blue-800 text-left md:text-center mb-10'>Privacy policy</h1>
            {
                privacyContent.map(privacy=>(
                    <div key={privacy.id} className='space-y-2 '>
                <h1 className='text-base-content text-sm font-bold'>{privacy.title}</h1>
                <p className='text-base-content mb-4'>{privacy.description}</p>
            </div>
                ))
            }
            
            
        </div>
    );
};

export default Privacy;