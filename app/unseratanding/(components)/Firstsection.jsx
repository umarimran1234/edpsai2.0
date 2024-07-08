"use client"
import React from 'react';
import { PlusIcon } from '@radix-ui/react-icons';
import  MappingSection from './Maping'
import ButtonSection from './Bottom'
const FirstSection = () => {
  return (
    <>

    <div className=" mtsm ml-4 mt-6 text-white min-h-screen p-4 sm:ml-12 sm:mt-20 sm:p-6 md:ml-20 md:mt-20 md:p-8">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2">
          {/* Understanding Problem Section */}
          <div>
            <h2 style={{color:'#888888' } } className="text-xl  sm:text-2xl md:text-3xl font-bold mb-4">Understanding Problem</h2>
            <div className="mb-4 flex flex-col sm:flex-row">
              <label className="block mr-0 sm:mr-12 mb-2 sm:mb-0 font-bold">Leader</label>
              <input
                type="text"
                className="changeinput w-full p-2 bg-gray-800 text-white rounded"
                placeholder="Ash"
                defaultValue="Ash"
              />
            </div>
            <div className="mb-4 flex flex-col sm:flex-row justify-between">
              <label className="block mb-2 sm:mb-0 font-bold mr-0 sm:mr-12">Leader</label>
              <input
                type="text"
                className="w-full p-2 changeinput bg-gray-800 text-white rounded"
                placeholder="Enter names"
              />
            </div>
            <div className="flex flex-wrap space-x-2 mb-4">
              <button className="px-4 py-2 bg-white font-bold text-black rounded-full mb-2 sm:mb-0">Faris</button>
              <button className="px-4 py-2 bg-white text-black font-bold rounded-full mb-2 sm:mb-0">Sherif</button>
              <button className="px-4 py-2 bg-white text-black font-bold rounded-full mb-2 sm:mb-0">Ahsan</button>
              <button className="px-4 py-2 bg-white font-bold text-white rounded-full"><PlusIcon fontWeight={800} color='black'/></button>
            </div>
            <div>
              <label className="block mb-2 font-bold">Describe problem clearly</label>
              <textarea
                className="w-full p-2 bg-transparent changeinput text-white rounded"
                rows="4"
                placeholder="Describe the problem......."
              ></textarea>
            </div>
          </div>

          {/* Standards Section */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Standards</h2>
            <div className="space-y-2">
              <input
                type="text"
                className="w-full px-4 py-2 bg-white font-bold text-black rounded-full"
                defaultValue="Lorem ipsum dolor sit amet"
              />
              <input
                type="text"
                className="w-full px-4 py-2 bg-white text-black font-bold rounded-full"
                defaultValue="Lorem ipsum dolor sit"
              />
              <input
                type="text"
                className="w-full px-4 py-2 bg-white text-black font-bold rounded-full"
                defaultValue="Lorem ipsum dolor sit amet"
              />
              <button className="px-4 py-2 bg-white text-white rounded-full"> <PlusIcon color='black'/> </button>

            </div>
          </div>
        </div>
       <MappingSection/>
      </div>
    </div>
    <ButtonSection  linking={"unseratanding/fishboneAnlysis"}  back={"/dashboard"}/>
    </>

  );
};

export default FirstSection;
