import React, { useContext, useState } from 'react'
import Sidebar from '../components/Sidebar'
import ChatWindow from '../components/ChatWindow'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ChatContext } from '../context/ChatContext'


const Main = () => {
    const [sidebar, setSidebar] = useState(true)
    const { state } = useContext(ChatContext)
    return (
        <>
            <button onClick={() => setSidebar(!sidebar)} className={`bg-white text-black p-1 rounded shadow m-2 text-3xl fixed z-20 ${state.user.displayName ? 'block' : 'hidden'} lg:hidden`}><GiHamburgerMenu /></button>
            <div className='lg:flex lg:flex-row lg:items-center lg:justify-between'>
                <Sidebar toggled={sidebar} toggleSidebar={() => setSidebar(!sidebar)} />
                <ChatWindow />
            </div>
        </>
    )
}

export default Main