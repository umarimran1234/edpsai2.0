"use client"
import React from 'react';
import {RadioGroupDemo} from  "../../../@/components/Radioex"
const MappingSection = () => {
  return (
    <div className="mt-6">
      <div className="container mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Mapping</h2>
        <div className="space-y-6">
          {/* Question 1 */}
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-lg sm:text-xl">Is there a standard to this problem?</p>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <RadioGroupDemo />
                <span className="ml-2">Yes</span>
              </label>
              <label className="flex items-center">
               <RadioGroupDemo />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
          {/* Question 2 */}
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-lg sm:text-xl">Are the people who may impact the issue area adequately trained?</p>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <RadioGroupDemo />
                <span className="ml-2">Yes</span>
              </label>
              <label className="flex items-center">
                <RadioGroupDemo />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
          {/* Question 3 */}
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-lg sm:text-xl">Is the machine in a good state of repair with no obvious defects?</p>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <RadioGroupDemo />
                <span className="ml-2">Yes</span>
              </label>
              <label className="flex items-center">
             <RadioGroupDemo />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
          {/* Question 4 */}
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-lg sm:text-xl">Do you have a containment measure in place to limit the impact of the issue?</p>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <RadioGroupDemo />
                <span className="ml-2">Yes</span>
              </label>
              <label className="flex items-center">
          <RadioGroupDemo />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MappingSection;
