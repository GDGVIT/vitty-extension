/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from './../Context'
import { getAuth, signOut } from 'firebase/auth'
import VTLogo from './../assets/landing_logo.png'
import './../styles/Nav.css'

const Nav: React.FC<any> = ({ pic, onShow }) => {
  const { userState } = useContext(AppContext)
  const [user, setUser] = userState
  const [text, setText] = useState('')

  const logOut = (): void => {
    const auth = getAuth()
    signOut(auth).then(() => {
      setText('')
      setUser('')
    }).catch((error) => {
      console.error(error)
    })
  }

  useEffect(() => {
    if (user !== '' && user !== 'loading') setText('Sign Out')
  }, [user])

  return (
    <header>
      <div className='logo'>
        <img src={VTLogo} alt='VITTY' />
        {/* <img src={Logo} alt='VITTY' /> */}
      </div>
      {pic !== null && pic !== '' && <div className='user-pfp' onClick={onShow}><img src={pic} alt='DP' /></div>}
      {/* <div className='nav-right'>
        <div className='sign-out' onClick={() => logOut()}>{text}</div>
      </div> */}
    </header>
  )
}

export default Nav
