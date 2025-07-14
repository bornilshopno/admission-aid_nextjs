"use client"

import React, { useRef } from 'react';
import useAuth from '../lib/useAuth';

const Banner = () => {

    const inputRef = useRef()
    const { setSearch, search } = useAuth()

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(inputRef.current.value)
        console.log(inputRef.current.value, "from banner search");
   


    }
    // <input
    //             type="text"
    //             value={search}
    //             onChange={(e) => setSearch(e.target.value)}
    //             placeholder="Search colleges..."
    //             className="border px-3 py-2 mx-auto block rounded mb-4 w-full max-w-md"
    //         />
    return (
        <div style={{ backgroundImage: "url('/assets/banner-home.webp')" }} className='min-h-[calc(100vh-120px)] bg-cover bg-center bg-fixed flex items-center justify-center'>
            <form className="join border-2 rounded-lg p-1">
                <input ref={inputRef} type='text' name='collegeSearch' className="input join-item" placeholder="Search by College Name" />
                <button onClick={handleSearch} type='submit' className="btn join-item rounded-r-md">Search</button>
            </form>
        </div>
    );
};

export default Banner;