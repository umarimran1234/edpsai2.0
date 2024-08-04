import React, { useState } from 'react';
import { Input } from '../../../components/ui/input';
import { PlusIcon } from "@radix-ui/react-icons";
import { useRouter } from 'next/navigation';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import axios from 'axios';

const Modal = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    Contributers: ''
  });

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userid = localStorage.getItem('_id');
    const contributorinarray = formData.Contributers.split(',').map(email => email.trim());

    try {
      const response = await axios.post('/api/addCard', {
        userId: userid,
        ProjectName: formData.name,
        DescribProblem: formData.description,
        Contributers: contributorinarray
      });

      const projectId = response.data.savData._id;
      console.log(projectId);

      await axios.post('/api/SaveProgress', {
        cardId: projectId,
        currentStep: 0,
      });

      router.push(`/understanding?cardId=${projectId}`);

    } catch (err) {
      console.log(err);
    }

    closeModal();
  };

  return (
    <div>
      <button onClick={openModal} className="mt-6 bg-gray-700 p-4 rounded-lg">
        <PlusIcon width={50} height={50} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75"></div>
          <div className="relative bg-gray-800 rounded-lg shadow-xl max-w-lg w-full p-6 z-50 mx-4 sm:mx-6 md:mx-8 lg:mx-10">
            <button
              type="button"
              className="absolute top-4 right-4 bg-red-500 text-white font-bold py-2 px-4 rounded"
              onClick={closeModal}
            >
              <XMarkIcon width={20} color='white' />
            </button>
            <div className="text-center mb-4">
              <h2 className="text-2xl font-semibold text-white">New Problem</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <div className="bg-gray-700 rounded-lg flex items-center justify-center w-full overflow-hidden">
                  <label className="flex flex-col w-full h-full group cursor-pointer">
                    <div className="flex flex-col items-center justify-center w-full h-full">
                      {image ? (
                        <Image width={200} height={200} src={image} alt="Preview" />
                      ) : (
                        <svg
                          className="w-10 h-10 text-gray-400 group-hover:text-gray-600"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M16.5 2a1.5 1.5 0 01.992 2.601l-5.004 5.004a1.5 1.5 0 01-1.49.375l-2.111-.702-5.149 5.148a1.5 1.5 0 11-2.12-2.12l5.147-5.15-.7-2.111a1.5 1.5 0 01.373-1.49L13.9 1.008A1.5 1.5 0 0116.5 2zm-1.005 4.993l-5.004-5.004-1.836 1.836 5.004 5.004 1.836-1.836z" />
                        </svg>
                      )}
                    </div>
                    <input 
                      type="file"
                      className="opacity-0 absolute"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </label>
                </div>
              </div>
              <div className="flex justify-center mb-4">
                <label className="block text-white font-bold mr-6 text-sm">Project Name</label>
                <Input
                  type="text"
                  name="name"
                  placeholder='Enter project name'
                  className="w-full"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-white mb-2">Description</label>
                <textarea
                  name="description"
                  id="description"
                  rows="6"
                  className="w-full p-3 border bg-transparent rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 resize-none text-white"
                  placeholder='Describe your problem'
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-center mb-4">
                <label className="block text-white font-bold mr-6 text-sm">Contributors</label>
                <Input
                  type="text"
                  name="Contributers"
                  placeholder='Add Email'
                  className="w-full"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
