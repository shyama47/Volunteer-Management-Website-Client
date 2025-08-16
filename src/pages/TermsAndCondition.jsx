import React from 'react';
import { Helmet } from 'react-helmet-async';
const termsContent =[
    {
        id:1,
        title:"1. Account Responsibility",
        description:"Users must register using accurate and complete information. They are solely responsible for maintaining the confidentiality and security of their account credentials and for all activities under their account."
    },
    {
        id:2,
        title:"2. Volunteer Commitments",
        description:"Once a user agrees to volunteer for a task, they are expected to fulfill their commitment sincerely and responsibly. Any intentional no-show or misuse of volunteer opportunities may lead to account restrictions."
    },
    {
        id:3,
        title:"3. Content Guidelines",
        description:"Users may not post, upload, or share any false, misleading, offensive, illegal, or harmful content on the platform. All submitted information must be truthful and respectful."
    },
    {
        id:4,
        title:"4. Prohibited Activities",
        description:"Any attempt to spam, harass, exploit, or abuse the platform or its users is strictly prohibited. Unauthorized access, hacking attempts, or misuse of the platform's services will result in immediate termination."
    },
    {
        id:5,
        title:"5. Termination of Access",
        description:"We reserve the right to suspend or terminate any user account without prior notice if any Terms & Conditions are violated or if any suspicious or harmful behavior is detected."
    },
    {
        id:6,
        title:"6. Modifications to the Platform",
        description:"We may update, modify, or remove features of the platform at any time without prior notice. Users agree that we are not liable for any changes, interruptions, or discontinuation of the service."
    },
    
]

const TermsAndCondition = () => {
    return (
        <div className='w-11/12 md:w-10/12 mx-auto my-10'>
            <Helmet>
                <title>TermsAndCondition || Page</title>
            </Helmet>
            <h1 className='text-2xl font-bold text-blue-800 text-left md:text-center mb-10'>Terms & Conditions</h1>
            {
                termsContent.map(terms=>(
                    <div key={terms.id} className='space-y-2 '>
                <h1 className='text-base-content text-sm font-bold'>{terms.title}</h1>
                <p className='text-base-content mb-4'>{terms.description}</p>
            </div>
                ))
            }
            
            
        </div>
    );
};

export default TermsAndCondition;