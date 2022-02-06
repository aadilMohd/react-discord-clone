import React from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch();

  const user = useSelector(selectUser)

  useEffect(() => {

    auth.onAuthStateChanged((authUser)=>{
      console.log(authUser)
      if(authUser){

        console.log(authUser.photoURL)

        dispatch(login({
          uid:authUser.uid,
          photo : authUser.photoURL,
          email:authUser.email,
          displayName : authUser.displayName,
        }))

      }
      else{


        dispatch(logout())

      }
    })
  },[dispatch]);

  return (
    <div className="app">

      {user ?( <>
     
      <Sidebar />
      <Chat /></>):(

      <Login></Login>
      )}
    
     
   
    </div>
  );
}

export default App;
