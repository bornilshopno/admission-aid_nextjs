import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <div>
             <Link href={'/'}>
                        <div className='flex items-center gap-2 border-2 py-1 px-2 rounded-3xl'>
                            <Image src={'/assets/logo-AddAid.jpg'} width={30} height={30} alt='logoImage' className='rounded-full' />
                            <p className='font-semibold'>Addmission Aid</p>
                        </div>
                    </Link>
        </div>
    );
};

export default Logo;