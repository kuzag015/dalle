import React from 'react'
import { GoogleLogout } from 'react-google-login';

const clientId = '899388841296-b6et3u569piqobqr8lnmblcfonh3528o.apps.googleusercontent.com'


const Logout = () => {
  const onSuccess = () => {
    alert('Successfully logged out')
  };
  return(
    <div>
        <GoogleLogout
            clientId={clientId}
            buttonText="Log out"
            onLogoutSuccess={onSuccess}
        ></GoogleLogout>
    </div>
  )
}


export default Logout