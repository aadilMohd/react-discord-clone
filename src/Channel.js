import React from 'react';
import { useDispatch } from 'react-redux';
import './Channel.css'

import {setChannelId} from './features/appSlice'

function Channel({id,channelName}) {

  console.log(channelName);

  const dispatch = useDispatch();

  return <div className='Channel' onClick={()=>
      dispatch(
        setChannelId({
          channelId:id,
          channelName:channelName
        })
      )
  }>
      <h4>

        <span className='Channel__hash'>#</span> {channelName}

      </h4>

  </div>;
}

export default Channel;
