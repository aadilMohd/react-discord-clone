import React from 'react';
import { useDispatch } from 'react-redux';
import './Channel.css'

import {setChannelId} from './features/appSlice'

function Channel({id,channelName}) {

  const dispatch = useDispatch();

  return <div className='Channel' onCLick={()=>{

    dispatch(setChannelId({
      channelId:id,
      channelName: channelName
    }))
  }}>
      <h4>

        <span className='Channel__hash'>#</span> {channelName}

      </h4>

  </div>;
}

export default Channel;
