import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from 'react'
const Captainsignup = () => { 

  const [first, setFirst] = useState('')
  const [last , setLast] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [userData , setUserData] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
   
    setUserData({
      fullname :{
        firstname : first,
        lastname : last 
      },
      email : email,
      password : password
    });
    
    setFirst('')
    setLast('')
    setEmail('')
    setPassword('')
  }
  return (
    <div className='flex  flex-col justify-between h-screen' >
     <div >
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5Bg9z1OmpdRYO0zt0tM52sQHazaPAEI8kQ&s" alt="logo" className='w-14  mt-6  ml-6 ' />
      <form onSubmit={(e)=>submitHandler(e)} className='flex flex-col pl-6 mt-10'>
          <label htmlFor="first" className='text-lg'>What's your name</label> 
        <div className='flex mb-8'>
          <input value={first} onChange={(e)=>{setFirst(e.target.value)}}  id='first' type="text" placeholder='Fistname' className='h-12 rounded-md mr-2 bg-gray-200  outline-blue-600 p-5 w-[42%]' />
          <input value={last} id='last' onChange={(e)=>{setLast(e.target.value)}} type="text" placeholder='Lastname' className='h-12 rounded-md  bg-gray-200  outline-blue-600 p-5 w-[45%]'/>
        </div>
        <label htmlFor="email" className='text-lg '> What's our captain's email</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} id='email' type="email" placeholder="Enter email here"  className='bg-gray-200 outline-blue-600 pl-5 border-2 rounded-md h-12 w-[90%] mb-8 '/>
        
        <label htmlFor="password" className='text-lg '>What's our captain's password</label>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} id='password' type="password" placeholder="Enter password here" className='bg-gray-200 pl-5  outline-red-600 border-2 rounded-md h-12 w-[90%] ' />
        <button className='h-12 w-[90%] rounded-md text-white text-center mt-6 bg-gray-900  '>Sign Up</button>
      
      </form>

      <p className='text-center pt-4'>Already part of a fleet? <Link to='/Captainlogin' className='text-blue-600'>Rejoin here</Link></p>
     
     </div>

     <div className='flex justify-center items-center mb-5'>
      <Link to='/Usersignup'  className="h-12 flex items-center justify-center w-[85%] text-xl rounded-md text-white text-center bg-blue-600 ">Sign up as a user</Link>
     </div>
      
    </div>
  )
}

export default Captainsignup
