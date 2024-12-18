import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from "./pages/Home"
import Userlogin from "./pages/UserLogin"
import Usersignup from "./pages/UserSignup"
import Captainlogin from './pages/Captainlogin'
import Captainsignup from './pages/Captainsignup'



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/Userlogin"  element={<Userlogin/>}/>
        <Route path="/Usersignup"  element={<Usersignup/>}/>
        <Route path="/Captainlogin"  element={<Captainlogin/>}/>
        <Route path="/Captainsignup"  element={<Captainsignup/>}/>
      </Routes>
    </>
  )
}

export default App
