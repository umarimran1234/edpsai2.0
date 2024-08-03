"use client"
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import bcrypt from 'bcryptjs';
import logo from '../../public/Images/login/logo.png';

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handlesignup = async (e) => {
    e.preventDefault();

    try {
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Send hashed password in the POST request
      const res = await axios.post('/api/user', {
        name: name,
        email: email,
        password: hashedPassword,
      });

      console.log(res.data);

      if (res.status === 201) {
        toast.success('Thank you for signing up. Please login.');
        router.push('/login');
      } else {
        console.log(res);
        toast.error('Signup failed. Please try again.');
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error('Email already exists');
      } 
      console.error('Error signing up:', error);
      // Optionally, show a toast notification for general error
      
    }
  };

  return (
    <>
      <div className='grid sm:grid-cols-1 lg:grid-cols-3' style={{ overflow: 'hidden' }}>
        <div style={{ zIndex: -1 }} className='back absolute'></div>
        <div className='col-span-2 lg:col-span-2'>
          <div className='px-12 py-12'>
            <Image src={logo} alt='logo' />
            <h3 style={{ fontWeight: '300' }}>Solution to every <b style={{ fontWeight: '600' }}>problem</b></h3>
            <span className='underspan'>identify define execute</span>
          </div>
        </div>
        <div style={{ background: 'black' }} className='col-span-2 lg:col-span-1 mt-2 bg-dark'>
          <div className='flex items-center justify-center min-h-screen bg-dark-100'>
            <div className='w-full max-w-sm mx-auto' style={{ background: 'black' }}>
              <div className='bg-dark shadow-md rounded-lg px-8 pt-6 pb-8 mb-4'>
                <h1 className='font-bold mb-6 text-center'>Sign up</h1>
                <p className='text-center text-white'>
                  Sign up to the system to revolutionize by solving the world problems
                </p>
                <div className='mb-2 mt-2'>
                  <label className='block text-white text-sm font-bold mb-2' htmlFor='password'>
                    First name
                  </label>
                  <input
                    required
                    className='shadow appearance-none borderset rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                    id='Firstname'
                    type='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Enter your first name'
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-white text-sm font-bold mb-2' htmlFor='email'>
                    Email
                  </label>
                  <input
                    required
                    className='shadow appearance-none borderset rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='email'
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='mb-2'>
                  <label className='block text-white text-sm font-bold mb-2' htmlFor='password'>
                    Password
                  </label>
                  <input
                    required
                    className='shadow appearance-none borderset rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                    id='password'
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className='flex items-center justify-center'>
                  <button
                    onClick={handlesignup}
                    className='btnlogin bg-blue-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    type='button'
                  >
                    Sign Up
                  </button>
                </div>
                <p className='text-center text-white text-xs mt-12'>
                  Already have an account?{' '}
                  <Link style={{ color: 'blue' }} href='/login'>
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
