import React from 'react';
import ButtonSection from '../(components)/Bottom';
export default function  FocusedProblemStatement ()  {
  return (
<>
<div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-6xl p-8">
        <h1 className="text-3xl font-semibold mb-6 text-center">Focused Problem Statement</h1>
        <div className="space-y-4">
          {['What', 'How', 'Which', 'When', 'Where', 'Who'].map((label, index) => (
            <div key={index} className="flex items-center space-x-4">
              <label className="w-20">{label}</label>
              <input
                type="text"
                placeholder={`${label} exactly is happening......`}
                className="flex-grow px-4 py-2 border border-gray-300 rounded-lg bg-black text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
      <ButtonSection  back={"/Flowchart"}   />
</>
);
};


