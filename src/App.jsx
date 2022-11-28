import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Register from './pages/Register'
import Login from './pages/Login'

const App = () => {

  return (
    <div className='min-w-full min-h-screen bg-slate-800 text-white'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App