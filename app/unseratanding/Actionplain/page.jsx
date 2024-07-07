import React from 'react';

const ActionPlanningTable = () => {
    return (
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
                                <th className="py-2 px-4 text-black border-r border-b border-gray-700">When</th>
                                <th className="py-2 px-4 text-black border-r border-b border-gray-700">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-black">
                                <td className="py-2 px-4 border-b border-r border-gray-700">Cause 1</td>
                                <td className="py-2 px-4 border-b border-r border-gray-700">Lorem ipsum dolor sit</td>
                                <td className="py-2 px-4 border-b border-r  border-gray-700">person 1</td>
                                <td className="py-2 px-4 border-b border-r border-gray-700">Lorem ipsum dolor</td>
                                <td className="py-2 px-4 border-b border-r border-gray-700">person1@email.com</td>
                            </tr>
                            <tr className="bg-black">
                                <td className="py-2 px-4 border-b border-r border-gray-700">Cause 2</td>
                                <td className="py-2 px-4 border-b border-r  border-gray-700">Lorem ipsum dolor sit</td>
                                <td className="py-2 px-4 border-b border-r border-gray-700">person 2</td>
                                <td className="py-2 px-4 border-b border-r border-gray-700">Lorem ipsum</td>
                                <td className="py-2 px-4 border-b border-r border-gray-700">person2@email.com</td>
                            </tr>
                            <tr className="bg-black">
                                <td className="py-2 px-4 border-r  border-b border-gray-700">Cause 2</td>
                                <td className="py-2 px-4 border-r border-b border-gray-700">Lorem ipsum dolor</td>
                                <td className="py-2 px-4 border-r border-b border-gray-700">person 3</td>
                                <td className="py-2 px-4 border-r border-b border-gray-700">Lorem ipsum dolor</td>
                                <td className="py-2 px-4 border-r border-b border-gray-700">person3@email.com</td>
                            </tr>
                            <tr className="bg-black">
                                <td className="py-2 px-4 border-b border-r border-gray-700">Cause 2</td>
                                <td className="py-2 px-4 border-b border-r border-gray-700">Lorem ipsum dolor</td>
                                <td className="py-2 px-4 border-b border-r border-gray-700">person 4</td>
                                <td className="py-2 px-4 border-b border-r border-gray-700">Lorem ipsum dolor</td>
                                <td className="py-2 px-4 border-b border-r border-gray-700">person4@email.com</td>
                            </tr>
                            <tr className="bg-black">
                                <td className="py-2 px-4 border-b border-r border-gray-700">Cause 2</td>
                                <td className="py-2 px-4 border-b border-r border-gray-700">Lorem ipsum</td>
                                <td className="py-2 px-4 border-b border-r border-gray-700">person 5</td>
                                <td className="py-2 px-4 border-b border-r border-gray-700">Lorem ipsum</td>
                                <td className="py-2 px-4 border-b border-r border-gray-700">person5@email.com</td>
                            </tr>
                            <tr className="bg-black">
                                <td className="py-2 px-4 border-b border-r border-gray-700">Cause 2</td>
                                <td className="py-2 px-4 border-b border-r border-gray-700">Lorem ipsum dolor</td>
                                <td className="py-2 px-4 border-b border-r  border-gray-700">Person 6</td>
                                <td className="py-2 px-4 border-b border-r border-gray-700">  Lorem ipsum </td>
                                <td className="py-2 px-4 border-b border-r border-gray-700">person6@email.com</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ActionPlanningTable;
