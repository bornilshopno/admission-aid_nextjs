import React from 'react';
import CollegeCard from '../shared/CollegeCard';
import dbConnect, { collectionNames, } from '../lib/dbConnect';

const CollegeSection = async() => {

    const collegesData= await dbConnect(collectionNames.collegeCollection).find().toArray();
    console.log(collegesData)
    // const data = [
    //     {
    //         "id": 1,
    //         "collegeImage": "/assets/college.jpeg",
    //         "collegeName": "Greenfield Science College",
    //         "admissionDate": "2025-08-01",
    //         "events": ["Science Fair", "Tech Talk", "Alumni Meet"],
    //         "researchHistory": "Renowned for AI and Environmental Studies since 2005.",
    //         "sports": ["Football", "Basketball", "Table Tennis"]
    //     },
    //     {
    //         "id": 2,
    //         "collegeImage": "/assets/college.jpeg",
    //         "collegeName": "Sunrise Arts Academy",
    //         "admissionDate": "2025-07-20",
    //         "events": ["Annual Drama", "Art Exhibition", "Creative Writing Workshop"],
    //         "researchHistory": "Leading research in performing arts and cultural studies.",
    //         "sports": ["Badminton", "Yoga", "Cricket"]
    //     },
    //     {
    //         "id": 3,
    //         "collegeImage":"/assets/college.jpeg",
    //         "collegeName": "Metro Business School",
    //         "admissionDate": "2025-09-01",
    //         "events": ["Business Summit", "Startup Expo", "Case Study Challenge"],
    //         "researchHistory": "Known for research in finance, entrepreneurship, and marketing since 2010.",
    //         "sports": ["Volleyball", "Swimming", "Chess"]
    //     },
    //     {
    //         "id": 4,
    //         "collegeImage": "/assets/college.jpeg",
    //         "collegeName": "Hillside Engineering Institute",
    //         "admissionDate": "2025-08-15",
    //         "events": ["TechFest", "Hackathon", "Robotics Show"],
    //         "researchHistory": "Specialized in civil engineering innovation and renewable energy research.",
    //         "sports": ["Cricket", "Basketball", "Athletics"]
    //     },
    //     {
    //         "id": 5,
    //         "collegeImage": "/assets/college.jpeg",
    //         "collegeName": "Riverdale Medical College",
    //         "admissionDate": "2025-08-10",
    //         "events": ["Health Camp", "Medical Seminar", "Blood Donation Drive"],
    //         "researchHistory": "Focused on clinical trials and biomedical engineering breakthroughs.",
    //         "sports": ["Tennis", "Swimming", "Table Tennis"]
    //     },
    //     {
    //         "id": 6,
    //         "collegeImage": "/assets/college.jpeg",
    //         "collegeName": "Bright Future Law School",
    //         "admissionDate": "2025-09-05",
    //         "events": ["Moot Court", "Legal Awareness Week", "Debate Championship"],
    //         "researchHistory": "Recognized for legal research and constitutional law studies.",
    //         "sports": ["Football", "Debating", "Carrom"]
    //     }
    // ]

    return (
        <div className='w-11/12 md:w-10/12 mx-auto'>
            <h1 className='text-center my-5 lg:my-10'>Colleges We Deal With</h1>
            <div className='grid gap-5 lg:grid-cols-3 justify-items-center'>
                {collegesData?.map((college) => (<CollegeCard key={college._id} college={college}></CollegeCard>))}
            </div>
        </div>
    );
};

export default CollegeSection;