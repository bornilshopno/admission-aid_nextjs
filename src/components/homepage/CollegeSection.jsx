'use client'

import React, { useEffect, useState } from 'react';
import CollegeCard from '../shared/CollegeCard';
import useAxiosPublic from '../lib/useAxiosPublic';

const CollegeSection = () => {
  const [colleges, setColleges] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get(`/api/allCollege`)
      .then(res => {
        setColleges(res.data);
      })
      .catch(err => console.error('Fetch error:', err));
  }, []);

  return (
    <div className='w-11/12 md:w-10/12 mx-auto'>
      <h1 className='text-center italic text-2xl font-semibold my-5'>Colleges We Deal With</h1>
      <div className='grid gap-5 lg:grid-cols-3 justify-items-center'>
        {colleges.slice(0, 3).map((college) => (
          <CollegeCard key={college._id} college={college} />
        ))}
      </div>
    </div>
  );
};

export default CollegeSection;
