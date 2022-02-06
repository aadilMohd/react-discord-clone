import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import Channel from "./Channel";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";
import { Avatar } from "@material-ui/core";

import MicIcon from "@material-ui/icons/Mic";

import HeadsetIcon from "@material-ui/icons/Headset";

import SettingsIcon from "@material-ui/icons/Settings";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import { db } from "./firebase";

function Sidebar() {
  const user = useSelector(selectUser);

  const [channels, setChannels] = useState([]);

  const channelAdd = ()=>{
    const channelname = prompt("Enter a new Channel Name");
    
    if(channelname){
      // db.collection('channels').add({
      //   channelName:channelname,
      // })
    }
  }
  //console.log(db.collection('channels'));




  return (

  
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Mohamed Aadil</h3>
        <ExpandMoreIcon />
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <h4>Text Channels</h4>
          </div>

          <AddIcon onClick={channelAdd} className="sidebar__addChannel" />
        </div>
        <div className="sidebar__channelsList">
          {channels.map((id,channel) => {
            <Channel key={id} id={id} channelName={channel}/>;
})}
        </div>
      </div>

      <div className="sidebar__voice">
        <SignalCellularAltIcon
          className="sidebar__voiceIcon"
          fontSize="large"
        />
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className="sidebar__voiceIcons">
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>
      <div className="sidebar__profile">
        <Avatar
          src={user.photo}
          onClick={() => {
            signOut(auth);
          }}
        />

        <div className="sidebar__profileInfo">
          <h3>{user.displayName}</h3>
          <p>#{user.uid.substring(0, 5)}</p>
        </div>

        <div className="sidebar__profileIcons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
