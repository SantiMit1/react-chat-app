import React from 'react'

const Register = () => {
  return (
    <div className='min-w-full min-h-screen bg-transparent flex flex-col gap-8 justify-center items-center'>
        <h2 className='text-3xl text-bold'>Registro</h2>
        <form className='flex flex-col justify-center items-center gap-3 bg-slate-700 p-6 rounded-lg shadow' onClick={(e) => e.preventDefault()}>
            <input className='form-input' type="text" placeholder='Nombre' />
            <input className='form-input' type="email" placeholder='Email' />
            <input className='form-input' type="password" placeholder='Contraseña'/>
            <button className='bg-slate-800 px-3 py-2 rounded-full hover:bg-slate-600 transition' type="submit">Registrarse</button>
        </form>
    </div>
  )
}

export default Register