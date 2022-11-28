import React from 'react'

const MessageReceived = ({msg, time}) => {
    return (
        <div className='self-start flex flex-col items-start bg-slate-700 p-3 rounded-xl mx-3'>
            <p>{msg}</p>
            <span className='text-gray-400 text-xs'>{time}</span>
        </div>
    )
}

export default MessageReceived