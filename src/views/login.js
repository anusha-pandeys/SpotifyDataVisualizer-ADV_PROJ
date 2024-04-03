import React from 'react'

import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Login - Active Online Software Page</title>
        <meta
          property="og:title"
          content="Login - Active Online Software Page"
        />
      </Helmet>
      <img
        alt="pastedImage"
        src="/external/pastedimage-l58o-1300w.png"
        className="login-pasted-image"
      />
      <div className="login-get-started">
        <span className="login-text">
          <span>Link Your Spotify Account,</span>
          <br></br>
          <span>Get Started Today!</span>
        </span>
      </div>
    </div>
  )
}

export default Login
