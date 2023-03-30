import React from 'react'
import { GoogleLogin } from 'react-google-login';
import { redirect } from "react-router-dom";

const clientId = '899388841296-b6et3u569piqobqr8lnmblcfonh3528o.apps.googleusercontent.com'

const Login = () => {
  const onSuccess = (res) => {
    console.log('[login success] currentUser:', res.profileObj);
    redirect('/create')
  };
  const onFailure = (res) => {
    console.log('[login failure] res:', res);
  };
  return(
    <div>
      <GoogleLogin
        clientId = {clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{marginTop: '100px'}}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login