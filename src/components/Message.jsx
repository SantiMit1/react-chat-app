import React from 'react'

const Message = ({msg, time, owner}) => {
    const date = new Date(time.seconds * 1000)
    const hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
    const minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()

    return (
        <div className={`${owner ? 'msg-sent' : 'msg-received'}`}>
            <p>{msg}</p>
            <span className='text-gray-400 text-xs self-end'>{`${hour}:${minute}`}</span>
        </div>
    )
}

export default Message