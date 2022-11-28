import React from 'react'
import Chat from './Chat'

const Sidebar = ({ toggled }) => {
    return (
        <div className={`flex flex-col items-center justify-start fixed top-0 min-w-full h-screen text-black bg-gray-50 ${toggled ? 'translate-x-0' : '-translate-x-full'} transition z-10`}>
            <h1 className='text-xl text-semibold p-4'>React Chat App</h1>
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