import  CardGiftcardIcon   from '@material-ui/icons/CardGiftcard';
import  GifIcon   from '@material-ui/icons/Gif';
import  EmojiEmotionsIcon   from '@material-ui/icons/EmojiEmotions';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import React from 'react';
import './Chat.css'
import Message from './Message';

import ChatHeader from './ChatHeader';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { selectChannelId,selectChannelName } from './features/appSlice';
import { useState ,useEffect} from 'react';
import { collection, getDocs, onSnapshot ,addDoc,orderBy} from 'firebase/firestore';

import {db } from './firebase'


function Chat() {
  
  const user = useSelector(selectUser)
  const channelId = useSelector(selectChannelId)
  const channelN = useSelector(selectChannelName)
  const [input, setinput] = useState("")
  const [messages, setmessages] = useState([])

  console.log(channelId)
 

  useEffect(()=>{

      if(channelId){
        // console.log("hi")
    onSnapshot(collection(db,"channels",channelId,"messages"),(snapshot)=>{
      console.log(snapshot)
      setmessages(snapshot.docs.map((doc)=> doc.data()))
      console.log(messages)
    })
  }

      



  },[channelId])

  const sendMessage = (e)=>{

    e.preventDefault();
    setinput("")

    const data = {
     
      message:input,
      user:user 
    }



     addDoc(collection(db,'channels',channelId,'messages'),data)





  }


  return <div className='chat'>


      <ChatHeader channelName={channelN}/>

      <div className="chat__messages">

        {messages.map((messages)=>(

                <Message user={messages.user} message={messages.message} />


        ))}

        
      </div>

      <div className="chat__input">

        <AddCircleIcon fontSize="large"/>
        <form action="">

          <input value={input} disabled={!channelId} onChange={(e)=> setinput(e.target.value)} type="text" placeholder={`Message #${channelN}`}/>

          <button className ="chat__inputButton" type='submit ' onClick={sendMessage} disabled={!channelId}>
            Send Message
          </button>

        </form>

        <div className="chat__inputIcons">

          <CardGiftcardIcon fontSize="large" />
          <GifIcon fontSize="large"/>
          <EmojiEmotionsIcon fontSize="large"/>

        </div>

      </div>



  </div>;
}

export default Chat;
