import React from 'react';
import { ExternalLinkIcon } from '@radix-ui/react-icons';  // Using react-icons for the info icon
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

const DocumentationUpload = () => {
    return (
        <div className=" mtsm text-white min-h-screen flex flex-col items-center justify-center p-6">
            <h1 className="text-center text-2xl font-semibold mb-6">Documentations</h1>
            <div className="w-full max-w-2xl mx-auto mb-6 flex justify-center">
                <div style={{width:'max-content', background:'#888888', color:'black' }} className="bg-gray-800 text-center text-gray-400 p-4 rounded-full  flex items-center">
                    <ExclamationCircleIcon width={20} className="mr-2" />
                    <span className='font-bold'>This data will be used for training purposes for our AI</span>
                </div>
            </div>
            <div className="w-full max-w-2xl mx-auto">
                <div style={{height:'24rem', borderRadius:'2rem' }} className="border-2 border-dashed border-gray-600  p-6 flex flex-col items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-500 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 21h8a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2z"></path>
                        <line x1="12" y1="11" x2="12" y2="17"></line>
                        <line x1="9" y1="14" x2="15" y2="14"></line>
                        <path d="M15 3h-6a2 2 0 0 0-2 2v2h10V5a2 2 0 0 0-2-2z"></path>
                    </svg>
                    <p className="text-gray-400 mb-4">Drag and drop a document</p>
                    <button className="bg-white text-gray-900 py-2 px-4 rounded hover:bg-gray-200">Browse from files</button>
                </div>
            </div>
        </div>
    );
};

export default DocumentationUpload;
