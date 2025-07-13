'use client'


import AllColleges from '@/components/lib/AllColleges';
import CollegeCard from '@/components/shared/CollegeCard';




const page =  () => {

const {allCollege}=AllColleges();



    return (
        <>
            <h1 className='text-center italic text-2xl font-semibold my-5'>All Colleges</h1>

            <div className='w-11/12 md:w-10/12 mx-auto py-5 md:py-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {allCollege?.map(college => (<CollegeCard key={college._id} college={college}></CollegeCard>))}
            </div>
        </>
    );
};

export default page;