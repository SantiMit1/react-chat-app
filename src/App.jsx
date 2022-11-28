import React, { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { AuthContext } from "./context/AuthContext"
import Main from './pages/Main'
import Register from './pages/Register'
import Login from './pages/Login'

const App = () => {
  const { user } = useContext(AuthContext)

  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />
    }

    return children
  }

  return (
    <div className='min-w-full min-h-screen bg-slate-800 text-white'>
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            <Main />
          </ProtectedRoute>
        } />
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App