import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className='fixed top-0 w-full z-51 bg-white border-b border-gray-200'>
      <div className='p-5'>
        <div className='flex items-center justify-between'>
          <p className='text-xl font-bold text-indigo-500'>G Drive Clone</p>
          <Image
            class='w-8 h-8 rounded-full border border-indigo-500'
            src='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
            alt='user photo'
            width={40}
            height={40}
          />
        </div>
      </div>
    </nav>
  );
}
