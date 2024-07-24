import React from "react";
import Image from "next/image";
import {CheckIcon} from '@heroicons/react/24/outline';
import { XCircleIcon } from '@heroicons/react/24/outline';
import logoopenai from '../../../public/Images/Problems/openailogo.png'
import ButtonSection from "../../understanding/(components)/Bottom"
const FishboneAnalysis = () => {
  const categories = [
    { name: "Man", causes: ["Cause 1", "Cause 2" ,"Cause 3"] },
    { name: "Material", causes: ["Cause 1", "Cause 2" ,"Cause 3"] },
    { name: "Machine", causes: ["Cause 1", "Cause 2" ,"Cause 3"] },
    { name: "Environment", causes: ["Cause 1", "Cause 2" ,"Cause 3"] },
    { name: "Method", causes: ["Cause 1", "Cause 2" ,"Cause 3"] },
    { name: "Measure", causes: ["Cause 1", "Cause 2" ,"Cause 3"] },
  ];

  return (
 <>

    <div className="min-h-screen mtsm flex flex-col items-center justify-center bg-black text-white p-4 ">
      <h1 className="text-3xl mb-8">Fishbone Analysis</h1>
      <div className="flex flex-col lg:flex-row">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {categories.map((category, index) => (
            <div  key={index} className="border  border-gray-700 rounded-lg  bg-black w-64 ">
            <div style={{background:'#888888'}} className="flex flex-wrap justify-around" >

              <h2 className="text-lg mb-2 font-bold border-gray-300 text-center text-black py-1">{category.name}</h2>
              <div className="mt-2" >

              <Image style={{position:''}}  src={logoopenai}  />
              </div>
            </div>
              <div className="space-y-2">
                {category.causes.map((cause, idx) => (
                  <div key={idx}  className="flex  justify-center items-center   p-1 ">
                    <span  className="text-sm m-3 font-bold ">{cause}</span>
                    <div className="  ">
                    <button>

                      <span className="text-green-500">  <CheckIcon width={20} /> </span>
                    </button>
                      <button>

                      <span className="text-red-500"> <XCircleIcon width={20} /> </span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center mt-8 lg:mt-0 lg:ml-8">
          <div className="border border-gray-700 rounded-lg   w-64 h-64">
          <di className='' >
            <h2  style={{ background:'#888888' }}   className="text-lg p-2 font-bold  text-center text-black ">Effect</h2>
          </di>
            <div className="h-16 flex items-center justify-center border-t border-gray-700">
              Result
            </div>
          </div>
        </div>
      </div>
    </div>
<ButtonSection back={"/unseratanding"}  linking={"whyanalysis"} />
    
 </>
  
  );
};

export default FishboneAnalysis;
