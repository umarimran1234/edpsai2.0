// components/Sidebar.js
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import contineuwork from '../../../public/Images/dashboard/Problem Description.png'
import contributor1 from '../../../public/Images/dashboard/Rectangle 32 (1).png'
import contributor2 from '../../../public/Images/dashboard/Rectangle 32 (2).png'
import contributor3 from '../../../public/Images/dashboard/Rectangle 32 (3).png'
import contributor4 from '../../../public/Images/dashboard/Rectangle 32.png'
import axios from 'axios';

// const contributors = [
//   {
//     role: 'Data Analyst',
//     name: 'Micole Jackson',
//     email: 'micol3jac@email.com',
//     image: contributor1,
//   },
//   {
//     role: 'App Developer',
//     name: 'Diplor Lore',
//     email: 'diplore@email.com',
//     image: contributor2,
//   },
//   {
//     role: 'UX Designer',
//     name: 'Drake Josh',
//     email: 'whyth3snake@email.com',
//     image: contributor3
//   },
//   {
//     role: 'Backend Developer',
//     name: 'Olivio Rodriguez',
//     email: 'maybeasinger@email.com',
//     image: contributor4,
//   },
// ];

const Sidebar = () => {
  const [contributor , setContirbutor] = useState([])
 const userId =  localStorage.getItem('_id')
  useEffect(()=>{
    const fetchContributer =  async () =>{
      try{
  const response = await axios.get(`/api/FetchContributer?userId=${userId}`)
  setContirbutor(response.data)

}catch(err){
 console.log( 'error fetching Contributors' , err);
      }

    };
    if(userId){
      fetchContributer()
    }
  }, [userId])
  return (
    <div className='container' >


    <div className="marl  col-span-1 text-white h-full w-80 p-6  right-0 top-0 flex flex-col space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Continue Working</h2>
        <Image 
          src={contineuwork}
          alt="Working"
          className="mb-4"
        />
        <div className="text-gray-400 underline">Website.com</div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Contributors</h2>
        {contributor.map((contributor, index) => (
          <div key={index} className="flex items-center space-x-4 mb-4">
            <Image
              src={contributor4}
              alt={contributor.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="text-gray-400"  key={index}> <span>{contributor}</span> </div>
              {/* <div className="font-semibold"> <span>{contributor.name}</span> </div>
              <div className="text-gray-400"> <span>{contributor.email}</span> </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
  );
};

export default Sidebar;
