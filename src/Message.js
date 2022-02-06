import { Avatar } from '@material-ui/core';
import React from 'react';
import './Message.css'

function Message({user, message}) {
  return <div className='message'> 

    <Avatar src={user.photo}/>

    <div className="message_info">

        <h4>{user.displayName}
            <span className='message__timestamp'>this is a timestamp</span>
        </h4>
        <p>{message}</p>
    </div>

   

  </div>;
}

export default Message;
