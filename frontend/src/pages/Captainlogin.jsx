import React from 'react'
import { Link } from 'react-router-dom'
 import {useState} from 'react'
const Captainlogin = () => {

  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('')
  const [captainData , setCaptaindata] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    setCaptaindata({
      email : email,
      password : password
    });
     setEmail('')
     setPassword('')
  }
  return (
    <div className='flex  flex-col justify-between h-screen' >
     <div >
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5Bg9z1OmpdRYO0zt0tM52sQHazaPAEI8kQ&s" alt="logo" className='w-16  mt-6  ml-6 ' />
      <form onSubmit={(e)=>submitHandler(e)} className='flex flex-col pl-6 mt-14'>

        <label htmlFor="email" className='text-lg '> What's our captain's email</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} id='email' type="email" placeholder="Enter email here"  className='bg-gray-200 outline-orange-600 pl-5 border-2 rounded-md h-12 w-[90%] mb-8 '/>
        
        <label htmlFor="password" className='text-lg '>What's our captain's password</label>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} id='password' type="password" placeholder="Enter password here" className='bg-gray-200 pl-5  outline-orange-600 border-2 rounded-md h-12 w-[90%] ' />
        <button className='h-12 w-[90%] rounded-md text-white text-center mt-6 bg-gray-900  '>Login</button>
      
      </form>

      <p className='text-center pt-4'>Join a fleet? <Link to='/Captainsignup' className='text-blue-600'>Register as a captain</Link></p>
     
     </div>

     <div className='flex justify-center items-center mb-5'>
      <Link to='/userLogin ' className='h-12 flex items-center justify-center  w-[85%] text-xl  rounded-md text-white text-center  bg-orange-600 '>Sign in as User</Link>
     </div>
      
    </div>
  )
}

export default Captainlogin
