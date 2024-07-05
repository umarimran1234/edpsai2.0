// components/Sidebar.js
import React from 'react';

const contributors = [
  {
    role: 'Data Analyst',
    name: 'Micole Jackson',
    email: 'micol3jac@email.com',
    image: 'https://via.placeholder.com/50',
  },
  {
    role: 'App Developer',
    name: 'Diplor Lore',
    email: 'diplore@email.com',
    image: 'https://via.placeholder.com/50',
  },
  {
    role: 'UX Designer',
    name: 'Drake Josh',
    email: 'whyth3snake@email.com',
    image: 'https://via.placeholder.com/50',
  },
  {
    role: 'Backend Developer',
    name: 'Olivio Rodriguez',
    email: 'maybeasinger@email.com',
    image: 'https://via.placeholder.com/50',
  },
];

const Sidebar = () => {
  return (
    <div className='container' >


    <div className="marl bg-black col-span-1 text-white h-full w-80 p-6  right-0 top-0 flex flex-col space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Continue Working</h2>
        <img
          src="https://via.placeholder.com/300x150"
          alt="Working"
          className="mb-4"
        />
        <div className="text-gray-400 underline">Website.com</div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Contributors</h2>
        {contributors.map((contributor, index) => (
          <div key={index} className="flex items-center space-x-4 mb-4">
            <img
              src={contributor.image}
              alt={contributor.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="text-gray-400">{contributor.role}</div>
              <div className="font-semibold">{contributor.name}</div>
              <div className="text-gray-400">{contributor.email}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
  );
};

export default Sidebar;
