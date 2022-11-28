import React from 'react'
import Chat from './Chat'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'
import { BiLogOut } from 'react-icons/bi'


const Sidebar = ({ toggled }) => {
    const navigate = useNavigate()
    
    const handleClick = () => {
        signOut(auth)
        navigate("/login")
    }

    return (
        <div className={`flex flex-col items-center justify-start fixed top-0 min-w-full h-screen text-black bg-gray-50 ${toggled ? 'translate-x-0' : '-translate-x-full'} transition z-10`}>
            <div className='flex flex-row justify-around w-full'>
                <h1 className='text-xl text-semibold p-4'>React Chat App</h1>
                <button onClick={handleClick} className='text-xl'><BiLogOut /></button>
            </div>
            <form className='w-full' onSubmit={(e) => e.preventDefault()}>
                <input className='py-3 px-2 w-full shadow outline-none text-black' placeholder='Buscar usuario' type="text" />
            </form>
            <div className='w-full overflow-y-scroll'>
                <Chat />
                <Chat />
                <Chat />
            </div>
        </div>
    )
}

export default Sidebar