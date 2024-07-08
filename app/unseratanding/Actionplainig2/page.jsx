import React from 'react';
import { RadioGroupDemo } from '../../../@/components/Radioex'; 
import  ButtonSection from "../(components)/Bottom"
 
const ActionPlanningTable2 = () => {
    return (
        <>

        <div className="mtsm text-white min-h-screen flex items-center justify-center p-6">
            <div className="w-full max-w-4xl mx-auto">
                <h1 className="text-center text-2xl font-semibold mb-6">Action Planning</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-700">
                        <thead  style={{background:'#888888'}} className="">
                            <tr style={{borderLeft:'#888888 solid 1px'}} >
                                <th className="py-2 px-4 text-black border-r border-b border-gray-700">Root Causes</th>
                                <th className="py-2 px-4 text-black border-r border-b border-gray-700">Actions</th>
                                <th className="py-2 px-4 text-black border-r border-b border-gray-700">Who</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-black">
                                <td className="py-2 px-4 border-b border-r border-gray-700">Has the result been achieved?</td>
                                <td className="py-2 px-4 border-b border-r border-gray-700"> <div className='flex justify-around' >
                                    <RadioGroupDemo />
                                    <span>Yes</span>
                                    <RadioGroupDemo />
                                    <span>No</span>
                                    </div></td>
                                <td className="py-2 px-4 border-b border-r  border-gray-700">Lorem ipsum dolor sit amet</td>

                            </tr>
                            <tr className="bg-black">
                                <td className="py-2 px-4 border-b border-r border-gray-700">Have all improvements been communicated to all affected people?</td>
                                <td className="py-2 px-4 border-b border-r  border-gray-700"  style={{height: "6rem" , width: "10rem"}}  > <div className='flex justify-around' >
                                    <RadioGroupDemo />
                                    <span>Yes</span>
                                    <RadioGroupDemo />
                                    <span>No</span>
                                    </div></td>
                                <td className="py-2 px-4 border-b border-r border-gray-700">Lorem ipsum dolor sit amet consectetur. Nibh lacus dictum.</td>

                            </tr>
                            <tr className="bg-black">
                                <td className="py-2 px-4 border-r  border-b border-gray-700">Have Standards been updated?</td>
                                <td className="py-2 px-4 border-r border-b border-gray-700">
                                    <div className='flex justify-around' >
                                    <RadioGroupDemo />
                                    <span>Yes</span>
                                    <RadioGroupDemo />
                                    <span>No</span>
                                    </div>
                                </td>
                                <td className="py-2 px-4 border-r border-b border-gray-700">Lorem ipsum dolor sit amet</td>

                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
<ButtonSection back={"Actionplainig2"}  linking={"document"} />

        </>

    );
};

export default ActionPlanningTable2;
