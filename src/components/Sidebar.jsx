import React, { useContext, useState } from 'react'
import Chat from './Chat'
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../../firebase'
import { query, where, collection, getDocs, getDoc, setDoc, doc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { signOut } from 'firebase/auth'
import { BiLogOut } from 'react-icons/bi'
import { AuthContext } from '../context/AuthContext'


const Sidebar = ({ toggled, toggleSidebar }) => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const [findUser, setFindUser] = useState("")
    const [chatUser, setChatUser] = useState()
    const [error, setError] = useState("")

    const handleClick = () => {
        signOut(auth)
        navigate("/login")
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const snapshot = await getDocs(query(collection(db, "users"), where("displayName", "==", findUser)))
        if (snapshot.docs.length > 0) {
            snapshot.forEach(doc => {
                setChatUser(doc.data())
            })
        } else {
            setError("No se ha encontrado ningun usuario")
            setChatUser(false)
        }
    }

    const handleSelect = async () => {
        const combinedId = user.uid > chatUser.uid ? user.uid + chatUser.uid : chatUser.uid + user.uid
        const res = await getDoc(doc(db, "chats", combinedId))
        if(!res.exists()) {
            await setDoc(doc(db, "chats", combinedId), {messages: []})

            await updateDoc(doc(db, "userChats", user.uid), {
                [combinedId+".userInfo"]: {
                    uid: chatUser.uid,
                    displayName: chatUser.displayName
                },
                [combinedId+".date"]: serverTimestamp()
            })

            await updateDoc(doc(db, "userChats", chatUser.uid), {
                [combinedId+".userInfo"]: {
                    uid: user.uid,
                    displayName: user.displayName
                },
                [combinedId+".date"]: serverTimestamp()
            })
        }

        setChatUser(null)
        setError("")
        setFindUser("")
        toggleSidebar()
    }

    return (
        <div className={`flex flex-col items-center justify-start fixed top-0 min-w-full h-screen text-black bg-gray-50 ${toggled ? 'translate-x-0' : '-translate-x-full'} transition z-10`}>
            <div className='flex flex-row justify-around w-full'>
                <h1 className='text-xl text-semibold p-4'>React Chat App</h1>
                <button onClick={handleClick} className='text-xl'><BiLogOut /></button>
            </div>
            <form className='w-full' onSubmit={handleSubmit}>
                <input onChange={(e) => setFindUser(e.target.value)} value={findUser} className='py-3 px-2 w-full shadow outline-none text-black' placeholder='Buscar usuario' type="text" />
            </form>
            <div className='w-full'>
                {chatUser ? (
                    <div className='w-full cursor-pointer px-2 py-5 mb-5 border-y border-gray-200 bg-emerald-50 flex flex-col' onClick={handleSelect}>
                        <h3>{chatUser.displayName}</h3>
                        <p className='text-gray-400'>{chatUser.email}</p>
                    </div>
                ) : <p className='text-center'>{error}</p>}
            </div>
            <div className='w-full overflow-y-scroll'>
                <Chat />
                <Chat />
                <Chat />
            </div>
        </div>
    )
}

export default Sidebar