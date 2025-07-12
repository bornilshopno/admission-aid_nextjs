import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";


const CollegeCard = ({ college }) => {
    const { _id, collegeImage, collegeName, admissionDate, events, researchHistory, sports } = college;

    // "id": 6,
    // "collegeImage": "/assets/college6.jpg",
    // "collegeName": "Bright Future Law School",
    // "admissionDate": "2025-09-05",
    // "events": ["Moot Court", "Legal Awareness Week", "Debate Championship"],
    // "researchHistory": "Recognized for legal research and constitutional law studies.",
    // "sports": ["Football", "Debating", "Carrom"]
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <div className=''>
                    <Image src={collegeImage} width={384} height={200} alt='CollegeImage' className='object-cover overflow-hidden' />

                </div>
                <div className="card-body px-0">
                    <h2 className="card-title">
                        {collegeName}

                    </h2>
                    <div className="badge badge-secondary">Admission Open : {admissionDate}</div>
                    <p className='h-16'>{researchHistory}</p>
                    <div className="card-actions justify-end pr-2">
                        {events?.slice(0,2).map((event, idx) => (<div key={idx} className="badge badge-outline">{event}</div>))}
                    </div>
                    <div className="card-actions justify-end pr-2">
                        {sports?.slice(0,2).map((event, idx) => (<div key={idx} className="badge badge-outline bg-green-400">{event}</div>))}
                    </div>
                </div>
                <Link className='flex items-center gap-2 btn' href={`/college/${college._id}`}>Details <FaArrowAltCircleRight /></Link>
            </div>
        </div>
    );
};

export default CollegeCard;