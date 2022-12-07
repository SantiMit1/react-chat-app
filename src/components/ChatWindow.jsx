import { arrayUnion, doc, onSnapshot, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore'
import React, { useContext, useEffect, useState, useRef } from 'react'
import { MdSend } from 'react-icons/md'
import { db } from '../../firebase'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
import Message from './Message'

const ChatWindow = () => {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])
  const { user } = useContext(AuthContext)
  const { state } = useContext(ChatContext)
  const messagesRef = useRef(null)

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", state.chatId), doc => {
      doc.exists() && setMessages(doc.data().messages)
    })

    return () => {
      unsub()
    }
  }, [state.chatId])

  useEffect(() => {
    messagesRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const sendMessage = async (e) => {
    e.preventDefault()
    await updateDoc(doc(db, "chats", state.chatId), {
      messages: arrayUnion(
        {
          message,
          time: Timestamp.now(),
          senderId: user.uid
        }
      )
    })
    setMessage("")

    await updateDoc(doc(db, "userChats", user.uid), {
      [state.chatId+".lastMessage"]: {
        text: message
      },
      [state.chatId+".date"]: serverTimestamp()
    })

    await updateDoc(doc(db, "userChats", state.user.uid), {
      [state.chatId+".lastMessage"]: {
        text: message
      },
      [state.chatId+".date"]: serverTimestamp()
    })
  }

  return (
    <div className='w-full h-screen flex flex-col justify-between lg:w-3/4'>
      <div className='w-full py-3 bg-slate-50 text-black text-center'>
        <h3 className='text-bold text-lg'>{state.user.displayName ? state.user.displayName : "Seleccione un contacto"}</h3>
      </div>
      <div className='w-full flex flex-col items-start h-4/5 overflow-y-scroll '>
        {messages?.map((msg, i) => {
          return <Message msg={msg.message} time={msg.time} owner={msg.senderId == user.uid ? true : false} key={i} />
        })}
        <div ref={messagesRef}/>
      </div>
      <form onSubmit={sendMessage} className='w-full flex flex-row justify-center items-center py-4 bg-slate-200 text-black'>
        <input onChange={(e) => setMessage(e.target.value)} value={message} className='rounded-l outline-none bg-slate-50 w-10/12 p-2' type="text" />
        <button className='rounded-r bg-slate-50 p-2 text-2xl' type="submit"><MdSend /></button>
      </form>
    </div>
  )
}

export default ChatWindow