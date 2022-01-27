import React, { useContext } from 'react'
import { AppContext } from './../Context'
// import { FaApple } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import '../styles/Auth.css'

const Auth: React.FC = () => {
  const { userState } = useContext(AppContext)
  const [, setUser] = userState

  const logIn = (provider: string): void => {
    chrome.runtime.sendMessage(`login${provider}`, (response: string) => {
      const userId = response
      setUser(userId)
    })
  }
  // TODO: Apple sign in
  return (
    <div className='auth'>
      <h1>Welcome to VIT<span>TY</span></h1>
      <div className='google-sign-in'>
        <button onClick={() => logIn('Google')}> <FcGoogle /> Sign in with Google</button>
      </div>
      {/* <div className='apple-sign-in'>
        <button onClick={() => logIn(auth, googleProvider)}> <FaApple /> Sign in with Apple</button>
      </div> */}
    </div>
  )
}

export default Auth
