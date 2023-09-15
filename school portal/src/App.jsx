import {Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Signin from "./components/Signin"
import Signup from "./components/Signup"
import Effects from "./components/Effects"



function App() {


  return (
    <>
    <Navbar/>
    {/* <Home/> */}

    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/signin' element={<Signin/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/effects' element={<Effects/>}/>

    </Routes>
    </>
  )
}

export default App
