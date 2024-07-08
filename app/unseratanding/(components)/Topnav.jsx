import Link from 'next/link';
import React from 'react';

export default function Topnav({ currentStep }) {
  const totalSteps = 9;

  return (
    <div style={{width:'100%'}} className="flex fixed  flex-col sm:flex-row justify-between items-center py-4 px-6 bg-black">
      <div className="flex ml-12 items-center space-x-2 relative mb-4 sm:mb-0">
        {Array.from({ length: totalSteps }, (_, index) => (
          <React.Fragment key={index}>
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full text-sm z-10 ${
                index === currentStep - 1
                  ? 'bg-gray-500 text-white'
                  : 'bg-white text-black'
              }`}
            >
              {index + 1}
            </div>
            {index < totalSteps - 1 && (
              <div  className="absolute left-1/2 transform -translate-x-1/2 " style={{width:'100%'}} >
                <div className="border-t-2 border-gray-500 w-6 sm:w-full mx-auto"></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="relative w-full sm:w-auto">
        <input
          style={{
            background: 'transparent',
            border: 'solid 1px #6b6565',
            color: 'white',
          }}
          type="text"
          placeholder="Search..."
          className="w-full sm:w-64 pl-4 pr-10 py-2 rounded-full bg-gray-200 text-black placeholder-gray-500 outline-none"
        />
        <button
          style={{ background: 'gray', borderRadius: '3rem', padding: '0.3rem' }}
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="text-gray-500"
          >
            <path d="M10 2a8 8 0 105.293 14.707l4.05 4.05a1 1 0 101.414-1.414l-4.05-4.05A8 8 0 0010 2zm0 2a6 6 0 11-4.243 10.243A6 6 0 0110 4z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
