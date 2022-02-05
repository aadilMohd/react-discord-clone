import  CardGiftcardIcon   from '@material-ui/icons/CardGiftcard';
import  GifIcon   from '@material-ui/icons/Gif';
import  EmojiEmotionsIcon   from '@material-ui/icons/EmojiEmotions';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import React from 'react';
import './Chat.css'
import Message from './Message';

import ChatHeader from './ChatHeader';

function Chat() {
  return <div className='chat'>


      <ChatHeader/>

      <div className="chat__messages">

        <Message />

      </div>

      <div className="chat__input">

        <AddCircleIcon fontSize="large"/>
        <form action="">

          <input type="text" placeholder={`Message #TESTCHANNEL`} />

          <button className ="chat`__inputButton" type='submit '>
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
