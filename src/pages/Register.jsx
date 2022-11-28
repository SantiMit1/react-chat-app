import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'
import { auth, db } from '../../firebase'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [email, setEmail] = useState("")
  const [nombre, setNombre] = useState("")
  const [contraseña, setContraseña] = useState("")
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await createUserWithEmailAndPassword(auth, email, contraseña)
      try {
        // Signed in 
        const user = res.user;
        await updateProfile(user, {
          displayName: nombre
        })
        await setDoc(doc(db, "users", res.user.uid), {
          uid: res.user.uid,
          displayName: res.user.displayName,
          email: res.user.email
        })
        navigate("/")
      }
      catch(error) {
        setError(error)
      };
  }

  return (
    <div className='min-w-full min-h-screen bg-transparent flex flex-col gap-8 justify-center items-center'>
      <h2 className='text-3xl text-bold'>Registro</h2>
      <form className='flex flex-col justify-center items-center gap-3 bg-slate-700 p-6 rounded-lg shadow' onSubmit={handleSubmit}>
        <input className='form-input' type="text" placeholder='Nombre' required onChange={(e) => setNombre(e.target.value)} />
        <input className='form-input' type="email" placeholder='Email' required onChange={(e) => setEmail(e.target.value)} />
        <input className='form-input' type="password" placeholder='Contraseña' minLength={6} required onChange={(e) => setContraseña(e.target.value)} />
        <button className='bg-slate-800 px-3 py-2 rounded-full hover:bg-slate-600 transition' type="submit">Registrarse</button>
        {error && <p className='text-red-600'>{error}</p>}
      </form>
    </div>
  )
}

export default Register