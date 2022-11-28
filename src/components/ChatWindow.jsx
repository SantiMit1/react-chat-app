import React from 'react'
import { MdSend } from 'react-icons/md'

const ChatWindow = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-between'>
      <div className='w-full py-3 bg-slate-50 text-black text-center'>
        <h3 className='text-bold text-lg'>Ramon</h3>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='w-full flex flex-row justify-center items-center py-4 bg-slate-200 text-black'>
        <input className='rounded-l outline-none bg-slate-50 w-10/12 p-2' type="text" />
        <button className='rounded-r bg-slate-50 p-2 text-2xl' type="submit"><MdSend /></button>
      </form>
    </div>
  )
}

export default ChatWindow