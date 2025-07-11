"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdOutlineMenuOpen } from "react-icons/md";
import Logo from '../lib/Logo';
import useAuth from '../lib/useAuth';

const Navbar = () => {
    const {user, userSignOut } = useAuth()
    function capitalizeFirstLetter(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
    const splitted=user?.email?.split('@')[0]
    console.log(splitted)
    const navMenu = () => {
        return <>
            <li><Link href={'/'}>HOME</Link></li>
            <li><Link href={'/colleges'}>COLLEGES</Link></li>
            <li><Link href={'/admission'}>ADMISSION</Link></li>
           { user && <>
            <li><Link href={'/myCollege'}>MY COLLEGE</Link></li>
            <li><Link href={'/addCollege'}>ADD COLLEGE</Link></li></>}
        </>
    }
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm ">
                <div className="navbar-start">
                    <Logo/>
                  
                 

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navMenu()}
                    </ul>
                </div>
               { user ? <>
                 <div className="navbar-end ">
                    <button onClick={()=>userSignOut()} className="btn btn-outline">LogOut {capitalizeFirstLetter(user?.email?.split('@')[0])}?</button>
                    
                </div>
               </> : <>
                <div className="navbar-end">
                    <Link href={"/login"} className="btn btn-outline">LogIn</Link>
                </div>
                </>}
                  <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <MdOutlineMenuOpen  className='text-3xl'/>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-28 p-2 shadow">
                            {navMenu()}
                        </ul>
                    </div>
            </div>
        </>
    );
};

export default Navbar;