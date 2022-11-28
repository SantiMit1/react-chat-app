import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import ChatWindow from '../components/ChatWindow'
import { GiHamburgerMenu } from 'react-icons/gi'


const Main = () => {
    const [sidebar, setSidebar] = useState(true)
    return (
        <>
            <button onClick={() => setSidebar(!sidebar)} className={`bg-white text-black p-1 rounded shadow m-2 text-3xl fixed z-20`}><GiHamburgerMenu /></button>
            <Sidebar toggled={sidebar} />
            <ChatWindow />
        </>
    )
}

export default Main