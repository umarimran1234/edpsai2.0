"use client"
import React from 'react'
import { useState } from 'react';
 
import { ClockIcon, GlobeIcon , LightningBoltIcon } from '@radix-ui/react-icons';
// import { LightBulbIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/outline';

function DashboardSideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex " >
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30  transform bg-gray-800 p-2 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="flex items-center  justify-between mb-6">
            
            <Bars3Icon/>

          <button onClick={toggleSidebar} className=" text-white">

          </button>
        </div>
 <nav defaultActiveKey="/home" className="flex-column bg-dark text-white" style={{ width: '60px', height: '100vh'  }}>
      <ul  style={ { padding:'1.4rem',  borderRadius:'2rem' ,   background:'#3A3A3C'}} >
   <li className='mb-4' >

      <Link href="/link-2" className="text-center text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
  <path fillRule="evenodd" d="M2.75 9a.75.75 0 0 1 .75.75v1.69l2.22-2.22a.75.75 0 0 1 1.06 1.06L4.56 12.5h1.69a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75v-3.5A.75.75 0 0 1 2.75 9ZM2.75 7a.75.75 0 0 0 .75-.75V4.56l2.22 2.22a.75.75 0 0 0 1.06-1.06L4.56 3.5h1.69a.75.75 0 0 0 0-1.5h-3.5a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75ZM13.25 9a.75.75 0 0 0-.75.75v1.69l-2.22-2.22a.75.75 0 1 0-1.06 1.06l2.22 2.22H9.75a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75ZM13.25 7a.75.75 0 0 1-.75-.75V4.56l-2.22 2.22a.75.75 0 1 1-1.06-1.06l2.22-2.22H9.75a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75Z" clipRule="evenodd" />
</svg>

      </Link>

   </li>
<li className='mb-4'>

      <Link href="/home" className="text-center text-white">
        <ClockIcon />
      </Link>
</li>
    
   <li className='mb-4' >
  <Link href="/link-1" className="text-center text-white">
        <GlobeIcon />
      </Link>
   </li> 
   <li className='mb-4' >

      <Link href="/link-2" className="text-center text-white">
        <LightningBoltIcon />
      </Link>
   </li>

      </ul>

    </nav>
      </div>

      {/* Main Content */}
     
    </div>
  );
  
}

export default DashboardSideBar