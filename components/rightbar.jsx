import React from "react";
import Image from "next/image";
export default function Rightbar() {
  return (
    <>
      <aside className='fixed right-0 top-0 z-50 w-16 h-screen pt-20 bg-white border-l border-gray-200'>
        <div className='p-5'>
          <div className='flex items-center space-y-10 justify-between flex-col'>
            <svg
              aria-hidden='true'
              className='w-6 h-6 text-indigo-500 transition duration-75 group-hover:text-gray-900'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z'></path>
              <path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z'></path>
            </svg>
            <svg
              aria-hidden='true'
              class='flex-shrink-0 w-6 h-6 text-indigo-500 transition duration-75'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'></path>
            </svg>
            <svg
              aria-hidden='true'
              class='flex-shrink-0 w-6 h-6 text-indigo-500 transition duration-75'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z'></path>
              <path d='M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z'></path>
            </svg>
            <svg
              aria-hidden='true'
              class='flex-shrink-0 w-6 h-6 text-indigo-500 transition duration-75'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                d='M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z'
                clip-rule='evenodd'></path>
            </svg>
          </div>
        </div>
      </aside>
    </>
  );
}
