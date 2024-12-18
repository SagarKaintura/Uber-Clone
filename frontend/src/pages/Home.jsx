import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userdataContext } from '../context/Usercontext'

const Home = () => {
   const [user , setUser] = useContext(userdataContext)
   console.log(user)
  return (
    <div className='flex flex-col-reverse items-center h-screen bg-black bg-[url(https://e0.pxfuel.com/wallpapers/980/149/desktop-wallpaper-road-signage-on-pole-symbol-light-traffic-light-ny-nyc-one-way-sign-broadway-new-york-thumbnail.jpg)]  '>
     <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="logo" className='w-16   absolute top-14  left-6' />
     <div className='bg-white   flex flex-col w-full items-center  relative '>
      <h1 className='text-2xl font-bold relative -left-12 mt-6'>Get started with Uber</h1>
      <Link to="/Userlogin" className='flex items-center justify-center w-[92%] h-12 bg-gray-950 rounded-md text-xl text-white mb-6 mt-6'>Continue </Link>
     </div>
    </div>
  )
}

export default Home
