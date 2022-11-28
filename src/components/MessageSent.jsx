import React from 'react'

const MessageSent = ({msg, time}) => {
    return (
        <div className='self-end flex flex-col items-start bg-green-700 p-3 rounded-xl mx-3'>
            <p>{msg}</p>
            <span className='text-gray-400 text-xs self-end'>{time}</span>
        </div>
    )
}

export default MessageSent