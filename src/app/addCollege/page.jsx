"use client"

import useAuth from '@/components/lib/useAuth';
import { Axios } from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const page = () => {
    const [selectedEvents, setSelectedEvents] = useState("");
    const {loading, setLoading, user}=useAuth();
    const [sports, setSports] = useState("");
    const { register,
        formState: { error, errors },
        handleSubmit,
        reset } = useForm();

        // to add image inside form
// const image_hosting_key = import.meta.env.VITE_IMGBB_HOSTING_API;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
    const events = ["Science Fair", "Tech Talk", "Alumini Meet", "Annual Drama", "Art Exibition", "Creative Writing Workshop", "Business Summit", "StartUp Expo", "Robotics Show", "Hackathon", "Debate Championship"]

    const sportsEvents = ["Football", "BasketBall", "Table Tennis", "Yoga", "Swimming", "Chess", "Carrom"]

    const onSubmit=async(d)=>{
           //image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] }
    const res = await Axios.post(image_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    });

    console.log(res, 'from IMGBB res')



        console.log(d)
        reset();
    }
    return (
        <div>
            <h2 className='text-center italic font-semibold text-2xl py-4'>Add A College</h2>
            <form className='space-y-2 max-w-2xl mx-auto border-2 p-4' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex justify-between gap-4 items-center '>
                    <label className='w-36'>
                        College Name:
                    </label>
                    <input {...register("collegeName", { required: true })} className='input flex-1 ' placeholder='Type College Name'/>
                </div>
                <div className='flex justify-between gap-4 items-center'>
                    <label className='w-36'>
                        Banner Image:
                    </label>
                    {/* <input className='input w-full max-w-xs' /> */}

                    <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered flex-1" />
                    {errors.photoURL && <span className="text-red-500">This field is required</span>}
                </div>
                <div className='grid grid-cols-4 gap-2 '>
                    <div className="form-control flex gap-4 col-span-2">
                        <label className="label w-36">
                            <span className="label-text dark:text-white">Start Date :</span>
                        </label>
                        <input type="date"   {...register("dateStart")} className="input input-bordered flex-1 " required />
                    </div>
                    <div className="form-control flex gap-4 col-span-2">
                        <label className="label w-36">
                            <span className="label-text dark:text-white">End Date :</span>
                        </label>
                        <input type="date"  {...register("dateEnd")} className="input input-bordered flex-1" />
                    </div>
                </div>
                <div className='flex justify-between gap-4 items-center'>
                    <label className='w-36'>
                        Events:
                    </label>
                    <select className="select flex-1"
                        {...register('events', { required: true })}
                        defaultValue={selectedEvents}
                        onChange={(e) => setSelectedEvents(e.target.value)}
                    >
                        <option value="">Select Events</option>
                        {
                            events.map(cat => {
                                return (
                                    <option key={cat} value={cat}>{cat}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className='flex justify-between gap-4 items-center'>
                    <label className='w-36'>
                        Research History:
                    </label>
                    <input {...register("researchHistory", { required: true })} className='input flex-1' placeholder='Type the history' />
                </div>
                <div className='flex justify-between gap-4 items-center'>
                    <label className='w-36'>
                        Sports Activities:
                    </label>
                    <select className="select flex-1"
                        {...register('sports', { required: true })}
                        defaultValue={sports}
                        onChange={(e) => setSports(e.target.value)}
                    >
                        <option value="">Select Sports</option>
                        {
                            sportsEvents.map(cat => {
                                return (
                                    <option key={cat} value={cat}>{cat}</option>
                                )
                            })
                        }
                    </select>
                </div>
       {
                                loading ?
                                    <div>
                                        <button
                                            type="submit"

                                            className="btn">
                                            <span className="animate-spin text-lg">
                                                s</span>
                                            Adding Collage....
                                        </button>
                                    </div> :
                                    <button
                                        type='submit'                         
                                        className="btn ">
                                        Add Collage</button>
                            }
            </form>
        </div>
    );
};

export default page;


//    //image upload to imgbb and then get an url
//     const imageFile = { image: data.image[0] }
//     const res = await axiosPublicly.post(image_hosting_api, imageFile, {
//       headers: {
//         'content-type': 'multipart/form-data'
//       }
//     });


// to add image inside form
// const image_hosting_key = import.meta.env.VITE_IMGBB_HOSTING_API;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

{/* 
                <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                {errors.photoURL && <span className="text-red-500">This field is required</span>} */}