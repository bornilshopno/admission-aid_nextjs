import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdOutlineMenuOpen } from "react-icons/md";
import Logo from '../lib/Logo';

const Navbar = () => {
    const navMenu = () => {
        return <>
            <li><Link href={'/'}>HOME</Link></li>
            <li><Link href={'/'}>COLLEGES</Link></li>
            <li><Link href={'/'}>ADMISSION</Link></li>
            <li><Link href={'/'}>MY COLLEGE</Link></li>
        </>
    }
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <Logo/>
                  
                    {/* <Link href={'/'}>
                        <div className='flex items-center gap-2 border-2 py-1 px-2 rounded-3xl'>
                            <Image src={'/assets/logo-AddAid.jpg'} width={30} height={30} alt='logoImage' className='rounded-full' />
                            <p className='font-semibold'>Addmission Aid</p>
                        </div>
                    </Link> */}

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navMenu()}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-outline">LogIn</a>
                </div>
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