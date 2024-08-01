"use client"
import React from 'react'
import { useState } from 'react';
import { ClockIcon, GlobeIcon , LightningBoltIcon } from '@radix-ui/react-icons';
import { Bars4Icon , ChartPieIcon, CommandLineIcon  } from '@heroicons/react/24/outline';
// import { LightBulbIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { IconLoader } from '@tabler/icons-react';
// import {} from '@heroicons/react/24/outline';
 export  default  function DashboardSideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex" >
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30  transform  p-2 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="flex items-center mt-3 px-5 justify-between mb-6">
            
          <button onClick={toggleSidebar} className=" text-white">
            <Bars4Icon id='baricone'  width={20} />


          </button>
        </div>
 <nav  defaultActiveKey="/home" className="flex-column bg-dark text-white mt-20" style={{ width: '60px', height: '100vh'  }}>
      <ul className='space-y-10' style={ { padding:'1.4rem',  borderRadius:'1rem' ,   background:'#3A3A3C'}} >
   <li className='mb-4'>

      <Link href="/link-2" className="text-center text-white">
      <CommandLineIcon width={20} height={20} color='gray' />

      </Link>

   </li>
<li className='mb-4'>

      <Link href="/home" className="text-center text-white">
   <ChartPieIcon width={20} height={20} color='gray' />
      </Link>
</li>
    
   <li className='mb-4' >
  <Link href="/link-1" className="text-center text-white">
      <ClockIcon color='gray' width={20} height={20}/>
      </Link>
   </li> 
   <li className='mb-4' >

      <Link href="/link-2" className="text-center text-white">
        <GlobeIcon color='gray' width={20} height={20} />
      </Link>

   </li>
<li className='mb-4' >

      <Link href="/link-2" className="text-center text-white">
       <IconLoader color='gray' width={20} height={20} paintOrder={3} />
      </Link>
      
   </li>
      </ul>

    </nav>
      </div>
<div className="flex-1 p-6 md:ml-64 absolute block lg:hidden">
        <button onClick={toggleSidebar} className="md:hidden mb-4 text-gray-700">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        </div>
      {/* Main Content */}
     
    </div>
  );
  
}

 