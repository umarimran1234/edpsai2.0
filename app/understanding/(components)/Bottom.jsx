"use client"
import Link from 'next/link';
import React from 'react';

const ButtonSection = ({  hanldenext  , back } , ) => {
  return (
    <div className="flex justify-end items-center space-x-4 p-4 sm:p-6 md:p-8">
      {/* Back Button */}
      <Link href={back}>

      
      <button  className="w-10 h-10 flex justify-center items-center bg-white text-black rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
</Link>
      {/* Redo Button */}
      <button   className="px-4 py-2 border border-gray-500 text-gray-500 rounded-full">
        Redo
      </button>

      {/* Next Button */}
      

      <button onClick={hanldenext} className="px-6 py-2 bg-white text-black rounded-full">
        Next
      </button>
      

    </div>
  );
};

export default ButtonSection;