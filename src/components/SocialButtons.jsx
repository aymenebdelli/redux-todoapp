import React from 'react'

import google from '../assets/google_logo.png'
import facebook from '../assets/facebook_logo.png'

const SocialButtons = () => {
  return (
    <div className="login__social">
      <button className="btn-google">
        <img src={google} alt="" width="40px" height="40px" />
        Sign in with google
      </button>
      <button className="btn-facebook">
        <img src={facebook} alt="" width="40px" height="40px" />
        Sign in with facebook
      </button>
    </div>
  )
}

export default SocialButtons