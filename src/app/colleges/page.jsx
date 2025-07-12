import useAxiosPublic from '@/components/lib/useAxiosPublic';
import CollegeCard from '@/components/shared/CollegeCard';



const page = async () => {


     const axiosPublic=useAxiosPublic()

    const collegesData= await axiosPublic.get(`/api/allCollege`);
    console.log(collegesData)


    // const collegeDatas = axiosPublic.get(`/api/allCollege`)


    return (
        <>
            <h1>All Collge</h1>

            <div className='w-11/12 md:w-10/12 mx-auto py-5 md:py-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {collegesData?.data?.map(college => (<CollegeCard key={college._id} college={college}></CollegeCard>))}
            </div>
        </>
    );
};

export default page;