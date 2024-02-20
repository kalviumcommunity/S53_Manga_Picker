import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Home from './Home'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Login' element={<Login />}/>
        <Route path='/SignUp' element={<Signup/>}/>

      </Routes>
    </div>
  )
}

export default AllRoutes
