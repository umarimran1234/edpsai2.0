import React, { useState } from 'react';
import { Input } from '../../../components/ui/input';
import { PlusIcon } from "@radix-ui/react-icons"
import { useRouter } from 'next/navigation';
import { XMarkIcon } from '@heroicons/react/24/outline';
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
      <button onClick={openModal} style={{ background: '#888888', padding: '1rem', borderRadius: "1rem" }} className="mt-6">
        <PlusIcon width={50} fontSize={100} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75"></div>

          <div style={{ borderRadius: '2rem', background: '#3A3A3C', padding: '3rem', border: '1px solid #888888' }} className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full p-6 z-50">
            <button style={{ position: 'absolute' }}
              type="button"
              className="bg-red-500 text-white font-bold py-2 px-4 rounded"
              onClick={closeModal}
            >
              <XMarkIcon width={20} color='white' fontWeight={300} />
            </button>
            <div style={{ textAlign: 'center' }}>
              <h2 className="text-2xl font-semibold mb-4">New Problem</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <div style={{ background: "#656060", borderRadius: '1rem' }} className="flex items-center overflow-hidden justify-center w-full">
                  <label style={{ width: '6rem', maxHeight: '6rem' }}
                    className="flex flex-col w-full h-26 group cursor-pointer"
                  >
                    <div className="flex flex-col items-center justify-center pt-7">
                      {image ? (
                        <img src={image} alt="Preview" className="h-full w-full object-cover" />
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
                      <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                        {image ? 'Change Image' : ''}
                      </p>
                    </div>
                    <input
                      type="file"
                      className="opacity-0"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </label>
                </div>
              </div>
              <div className=" flex justify-center">
                <label className="block text-white font-bold mr-6 text-sm font-bold ">
                  ProjectName
                </label>
                <Input
                  type="text"
                  name="name"
                  placeholder='Enter project name'
                  className="profassionalinput w-100"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="w-full">
                <label htmlFor="professional-textarea" className="block text-sm font-medium text-white font-bold mb-2">Description</label>
                <textarea name="description" onChange={handleChange} placeholder='Describe your problem' style={{ color: 'white' }} id="professional-textarea" rows="6" className="outline-none w-full p-3 border bg-transparent rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 resize-none"></textarea>
              </div>

              <div className="mt-3 flex justify-center">
                <label className="block text-white font-bold mr-6 text-sm font-bold ">
                  Contributers
                </label>
                <Input
                  placeholder='add Email'
                  type="text"
                  name="Contributers"
                  className="profassionalinput w-100"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="mt-3 flex items-center justify-center">
                <button
                  type="submit"
                  className="btnhandle text-white font-bold py-2 px-4 rounded"
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
