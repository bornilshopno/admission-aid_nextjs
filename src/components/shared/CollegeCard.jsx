import Image from 'next/image';
import React from 'react';

const CollegeCard = ({ college }) => {
    const { id, collegeImage, collegeName, admissionDate, events, researchHistory, sports } = college;

    // "id": 6,
    // "collegeImage": "/assets/college6.jpg",
    // "collegeName": "Bright Future Law School",
    // "admissionDate": "2025-09-05",
    // "events": ["Moot Court", "Legal Awareness Week", "Debate Championship"],
    // "researchHistory": "Recognized for legal research and constitutional law studies.",
    // "sports": ["Football", "Debating", "Carrom"]
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className='w-full h-30'>
                    <Image src={collegeImage} fill className='object-cover' />

                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {collegeName}

                    </h2>
                    <div className="badge badge-secondary">Admission Open : {admissionDate}</div>
                    <p>{researchHistory}</p>
                    <div className="card-actions justify-end pr-2">
                        {events?.map((event, idx) => (<div key={idx} className="badge badge-outline">{event}</div>))}
                    </div>
                    <div className="card-actions justify-end pr-2">
                        {sports?.map((event, idx) => (<div key={idx} className="badge badge-outline bg-green-400">{event}</div>))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeCard;