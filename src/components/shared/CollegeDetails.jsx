import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";


const CollegeDetails = ({college}) => {
    const {collegeImage, collegeName, admissionDate, events, researchHistory, sports } = college;
    console.log("college", college)//found college object with collegeImage:url
console.log(collegeImage)// why undefined here
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <div className=''>
                    <Image src={collegeImage} width={384} height={200} alt='CollegeImage' className='object-cover overflow-hidden' />

                </div>
                <div className="card-body px-0">
                    <h2 className="card-title">
                       CollegeName:  {collegeName}

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
                {/* <Link className='flex items-center gap-2 btn' href={`/college/${college._id}`}>Details <FaArrowAltCircleRight /></Link> */}
            </div>
        </div>
    );
};

export default CollegeDetails;