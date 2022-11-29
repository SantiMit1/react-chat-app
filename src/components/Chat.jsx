import React from 'react'

const Chat = ({ displayName, lastMessage }) => {
    return (
        <div className='w-full px-2 py-5 border-y border-gray-200 flex flex-col'>
            <h3>{displayName}</h3>
            <p className='text-gray-400'>{lastMessage}</p>
        </div>
    )
}

export default Chat