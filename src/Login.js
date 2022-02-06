import React from 'react';
import {auth, provider} from './firebase'
import './Login.css'

import { Button } from '@material-ui/core';
import { signInWithPopup } from 'firebase/auth';

function Login() {

    const signIn =()=>{

        signInWithPopup(auth,provider)



    }
  return(
  
  <div className='login'>

      <div className="login__logo">
          <img src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-branding-2.png" alt="" />
      </div>
      
      <Button onClick={signIn}>Sign In</Button>

        

  </div>);
}

export default Login;
