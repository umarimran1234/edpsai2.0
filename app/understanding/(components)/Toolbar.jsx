// components/Toolbar.js
'use client'
import React from 'react';

import { PencilAltIcon, PlusIcon, MinusIcon, DeviceMobileIcon } from '@heroicons/react/24/outline'; // import Heroicons for icons

const Toolbar = ({ setCommand }) => {
  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 space-y-4">
      <button  
        className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg"
        onClick={() => setCommand('addNode')}
      >
        <PlusIcon className="h-6 w-6 text-black" />
      </button>
      <button 
        className="w-12 h-12 flex items-center justify-center bg-gray-500 rounded-full shadow-lg"
        onClick={() => setCommand('removeNode')}
      >
        <MinusIcon className="h-6 w-6 text-black" />
      </button>
    </div>
  );
};

export default Toolbar;
