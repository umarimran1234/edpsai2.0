"use client";
import logo from '../../public/Images/login/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function Login() {
const detect = async () =>{
  if(!navigator.onLine){
toast.error('connect brick')
} else{
toast.success('connection restore')

} 
window.onload(detect())
}
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 const [error , seterror] = useState('')
  const router = useRouter();
 
  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
const response = await axios.post('/api/login', {email:email ,password:password});
const {token , userId} = response.data;
console.log('recived' , userId);
document.cookie = `token${token}; Secure; SemSite=Strict`   
localStorage.setItem('_id' , userId)
localStorage.setItem( 'token', token)
router.push('/dashboard')
toast.success( 'thank for login')
}
     catch (e) {
       console.error('Login error:', error);
      seterror('Invalid credentials. Please try again.');
router.push('/login')
    toast.error('invalid credantials')
    }
  };


  return (
    <>
      <div className='grid sm:grid-cols-1 lg:grid-cols-3' style={{ overflow: 'hidden' }}>
        <div style={{ zIndex: -1 }} className='back absolute'></div>
        <div className='col-span-2 lg:col-span-2'>
          <div className='px-12 py-12'>
            <Image src={logo} alt='logo' />
            <h3 style={{ fontWeight: '300' }}>
              Solution to every <b style={{ fontWeight: '600' }}>problem</b>
            </h3>
            <span className='underspan'>identify define execute</span>
          </div>
        </div>
        <div style={{ background: 'black' }} className='col-span-2 lg:col-span-1 mt-2 bg-dark'>
          <div className="flex items-center justify-center min-h-screen bg-dark-100">
            <div className="w-full max-w-sm mx-auto" style={{ background: 'black' }}>
              <div className="bg-dark shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
                <h1 className="font-bold mb-6 text-center">Login</h1>
                <p className="text-center text-white">
                  Login to the system to revolutionize by solving the world problems
                </p>

                <div className="mb-4">
                  <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="shadow appearance-none borderset rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    required
                    className="shadow appearance-none borderset rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    onClick={handleSignIn}
                    className="btnlogin bg-blue-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Log In
                  </button>
                  <a
                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>

                <p className="text-center text-white text-xs mt-12">
                  Don't have an account? Please <Link href={'/signup'}>Sign up</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
