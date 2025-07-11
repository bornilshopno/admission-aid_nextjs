import { useRouter } from 'next/navigation';
import React from 'react';
import useAuth from '../lib/useAuth';
import { FaGoogle } from "react-icons/fa6";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    // const axiosPublicly = useAxiosPublic();
    const navigate = useRouter()

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    role: "user"
                };
                // axiosPublicly.post('/users/new-user', userInfo)
                //     .then(res => {
                //         if (res.data) {
                //             navigate("/")
                //         }
                //     })
            }
            )
    }
    return (
       <div className="mt-2 p-2 bg-primary dark:bg-secondary w-60 rounded-md mx-auto lg:mr-0 ">
                <button className="flex gap-2 items-center btn-sm mx-auto btn px-8 rounded-lg" onClick={handleGoogleSignIn}><FaGoogle></FaGoogle> Join With Your Gmail </button>
            </div>
    );
};

export default SocialLogin;