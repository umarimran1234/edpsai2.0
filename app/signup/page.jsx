import { CardWithForm } from '@/components/Card'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import loginimage from '@/public/Images/login/Group267.png'
import logo from '@/public/Images/login/logo.png'
import Image from 'next/image'
import Link from 'next/link'
export default function signup(){
return(
    <>
    <div className=' grid sm:grid-cols-1 lg:grid-cols-3' style={{overflow:'hidden'}} >
 <div style={{zIndex:-1}} className='back absolute'>
    
 </div>
 <div className='col-span-2 lg:col-span-2'>
 <div className='  px-12 py-12'>
<Image  src={logo} alt='logo'/>
 <h3 style={{fontWeight:'300'}} >Solution to every  <b style={{fontWeight:'600'}}>problem</b> </h3>
 <span className='underspan'>identify define execute</span>

 </div>
 </div>
 <div style={{background:'black'}}  className='col-span-2 lg:col-span-1 mt-2 bg-dark'>
  <div className="flex items-center justify-center min-h-screen bg-dark-100">
      <div className="w-full max-w-sm mx-auto" style={{background:'black'}}>
        <div className="bg-dark shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
          <h1 className=" font-bold mb-6 text-center">Sign up</h1>
        <p className="text-center text-white ">
          Sign up to the system to revolutionize by solving
the world problems
        </p>
          <form>
<div className="mb-2 mt-2">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                Fists name             
                 </label>
              <input  
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="Firstname"
                type="name"
                placeholder="Enter your first name"
              />
            </div>
            <div className="mb-4">


              <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-2">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input  
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>


            <div className="flex items-center justify-center">
              <button
                className=" btnlogin  bg-blue-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign Up
              </button>
              
            </div>
          
          </form>
        <p className="text-center text-white text-xs mt-12 ">
          already have an account please <Link style={{color:'blue'}} href={'/login'}>login</Link> 
        </p>
        </div>
        
      </div>
    </div>
   </div>
    </div>
    </>
)
}