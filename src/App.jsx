import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import { GiHamburgerMenu } from 'react-icons/gi'
import ChatWindow from './components/ChatWindow'

const App = () => {
  const [sidebar, setSidebar] = useState(true)

  return (
    <div className='min-w-full min-h-screen bg-slate-800 text-white'>
      <button onClick={() => setSidebar(!sidebar)} className={`bg-white text-black p-1 rounded shadow m-2 text-3xl fixed z-20`}><GiHamburgerMenu /></button>
      <Sidebar toggled={sidebar} />
      <ChatWindow />
    </div>
  )
}

export default App