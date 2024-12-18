import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from 'react'
const Userlogin = () => {

  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('')
  const [userData , setUserData] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    setUserData({
      email : email,
      password : password
    });
     setEmail('')
     setPassword('')
  }
  return (
    <div className='flex  flex-col justify-between h-screen' >
     <div >
     <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="logo" className='w-16  mt-10  ml-7 ' />
      <form onSubmit={(e)=>submitHandler(e)} className='flex flex-col pl-6 mt-16'>

        <label htmlFor="email" className='text-lg '> What's your email</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} id='email' type="email" placeholder="Enter email here"  className='bg-gray-200 outline-emerald-600 pl-5 border-2 rounded-md h-12 w-[90%] mb-8 '/>
        
        <label htmlFor="password" className='text-lg '>What's your password</label>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} id='password' type="password" placeholder="Enter password here" className='bg-gray-200 pl-5  outline-emerald-600 border-2 rounded-md h-12 w-[90%] ' />
        <button className='h-12 w-[90%] rounded-md text-white text-center mt-6 bg-gray-900  '>Login</button>
      
      </form>

      <p className='text-center pt-4'>New here? <Link to='/Usersignup' className='text-blue-600'>Create a new account</Link></p>
     
     </div>

     <div className='flex justify-center items-center mb-5'>
      <Link to='/captainLogin ' className='h-12 flex items-center justify-center  w-[85%] text-xl  rounded-md text-white text-center  bg-emerald-600 '>Sign in  as Captain</Link>
     </div>
      
    </div>
  )
}

export default Userlogin
