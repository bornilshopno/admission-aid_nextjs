import React from 'react';
import CollegeCard from '../shared/CollegeCard';
import axios from 'axios';
import useAxiosPublic from '../lib/useAxiosPublic';


const CollegeSection = async() => {
    const axiosPublic=useAxiosPublic()

    const collegesData= await axiosPublic.get(`/api/allCollege`);
    console.log(collegesData)
 

    return (
        <div className='w-11/12 md:w-10/12 mx-auto'>
            <h1 className='text-center my-5 lg:my-10'>Colleges We Deal With</h1>
            <div className='grid gap-5 lg:grid-cols-3 justify-items-center'>
                {collegesData?.data.slice(0,3).map((college) => (<CollegeCard key={college._id} college={college}></CollegeCard>))}
            </div>
        </div>
    );
};

export default CollegeSection;