"use client"
import React from 'react'
import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/24/outline';
import { XCircleIcon } from '@heroicons/react/24/outline';
import logoopenai from '../../../public/Images/Problems/openailogo.png'
import ButtonSection from '../(components)/Bottom'
function WhyAnalysis() {
  const categories = [
    { name: "Root Cause", causes: ["Cause 1"] },
    { name: "Cause 1", causes: ["Cause 1"] },
    { name: "Cause 1", causes: ["Cause 1"] },
    { name: "Cause 1", causes: ["Cause 1"] },
    { name: "Cause 2", causes: ["Cause 1"] },
    { name: "Cause 2", causes: ["Cause 1"] },
  ];

  return (
    <>
      <div style={{marginTop:'6rem'}} className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
        <h1 className="text-3xl mb-8">5 Why Analysis</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
          {categories.slice(0, 4).map((category, index) => (
            <div key={index} className="border border-gray-700 rounded-lg bg-black w-64 h-64">
              <div style={{ background: '#888888' }} className="flex flex-wrap justify-around">
                <h2 className="text-lg mb-2 font-bold border-gray-300 text-center text-black py-1">{category.name}</h2>
                <div className="mt-2">
                    <Image src={{logoopenai}} />
                </div>
              </div>
              <div className="space-y-2">
                {category.causes.map((cause, idx) => (
                  <div key={idx} className="text-center mt-12 items-center p-1">
                    <span className="text-lg m-3 font-bold">{cause}</span>
                    <div className="mt-6">
                      <button>
                        <span className="text-green-500"><CheckIcon width={25} /></span>
                      </button>
                      <button>
                        <span className="text-red-500"><XCircleIcon width={25} /></span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="lg:col-span-4 flex justify-center">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
              {categories.slice(4).map((category, index) => (
                <div key={index} className="border border-gray-700 rounded-lg bg-black w-64 h-64">
                  <div style={{ background: '#888888' }} className="flex flex-wrap justify-around">
                    <h2 className="text-lg mb-2 font-bold border-gray-300 text-center text-black py-1">{category.name}</h2>
                    <div className="mt-2"></div>
                  </div>
                  <div className= "  space-y-2">
                    {category.causes.map((cause, idx) => (
                      <div key={idx} className="text-center mt-12  items-center p-1">
                        <span className="text-lg font-bold">{cause}</span>
                        <div className=" mt-6">
                          <button>
                            <span className="text-green-500"><CheckIcon width={25} /></span>
                          </button>
                          <button>
                            <span className="text-red-500"><XCircleIcon width={25} /></span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
<ButtonSection back={"fishboneAnlysis"}  linking={"Actionplain"} />
    
    </>
  )
}

export default WhyAnalysis;
