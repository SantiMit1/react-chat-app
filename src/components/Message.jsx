import React from 'react'

const Message = ({msg, time, owner}) => {
    return (
        <div className={`${owner ? 'msg-sent' : 'msg-received'}`}>
            <p>{msg}</p>
            {/* <span className='text-gray-400 text-xs self-end'>{time.toDate()}</span>  ARREGLAR ESTO*/}
        </div>
    )
}

export default Message