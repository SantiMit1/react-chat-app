import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                navigate("/")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }

    return (
        <div className='min-w-full min-h-screen bg-transparent flex flex-col gap-8 justify-center items-center'>
            <h2 className='text-3xl text-bold'>Inicio de sesión</h2>
            <form className='flex flex-col justify-center items-center gap-3 bg-slate-700 p-6 rounded-lg shadow' onSubmit={handleSubmit}>
                <input className='form-input' type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                <input className='form-input' type="password" placeholder='Contraseña' onChange={(e) => setPassword(e.target.value)} />
                <button className='bg-slate-800 px-3 py-2 rounded-full hover:bg-slate-600 transition' type="submit">Iniciar Sesión</button>
                <Link className='text-sm' to={"/register"}>Registrate</Link>
                {error && <p className='text-red-600'>{error}</p>}
            </form>
        </div>
    )
}

export default Login