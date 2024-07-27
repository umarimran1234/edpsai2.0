// components/Toolbar.js
'use client';
import React from 'react';
import { PlusIcon, MinusIcon , PencilSquareIcon } from '@heroicons/react/24/outline';
import { Controls } from '@xyflow/react';

const Toolbar = ({ setCommand, setNodeLabel }) => {
  const handleAddNodeClick = () => {
    const label = prompt('Enter node label:');
    if (label) {
      setNodeLabel(label);
      setCommand('addNode');
    }
  };

  return (
    <div style={{ zIndex: '9999999999' }} className="fixed right-4 top-1/2 transform -translate-y-1/2 space-y-4">
      <button
        className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg"
        onClick={handleAddNodeClick}
      >
        <PencilSquareIcon className="h-6 w-6 text-black" />
      </button>
      <button
        className="w-12 h-12 flex items-center justify-center bg-gray-500 rounded-full shadow-lg"
        onClick={() => setCommand('removeNode')}
      >
        <MinusIcon className="h-6 w-6 text-black" />
      </button>
      <div className="" style={{marginTop:'13rem'}}>
        <Controls style={{color:'white', fontSize:'12rem' , } } />
      </div>
    </div>
  );
};

export default Toolbar;
