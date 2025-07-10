import React from 'react';

const Banner = () => {
    return (
        <div style={{ backgroundImage: "url('/assets/banner-home.webp')" }} className='min-h-[calc(100vh-120px)] bg-cover bg-center bg-fixed flex items-center justify-center'>
            <div className="join border-2 rounded-lg p-1">
                <input className="input join-item" placeholder="College Name" />
                <button className="btn join-item rounded-r-md">Search</button>
            </div>
        </div>
    );
};

export default Banner;