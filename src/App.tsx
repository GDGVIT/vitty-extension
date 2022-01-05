/* eslint-disable react/jsx-indent */
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from './Context'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import EllipseTR from './assets/ellipse_tr.png'
import EllipseBL from './assets/ellipse_bl.png'
import Nav from './components/Nav'
import Auth from './components/Auth'
import HomeCarousel from './components/HomeCarousel'
import LoggedIn from './components/LoggedIn'
import Loader from './components/Loader'
import './styles/App.css'
import Profile from './components/Profile'

const App: React.FC = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyAGsvEIEPrNKNj_0Z5IzoXBCQQAqEQXG48',
    authDomain: 'vitty-dev.firebaseapp.com',
    projectId: 'vitty-dev',
    storageBucket: 'vitty-dev.appspot.com',
    messagingSenderId: '266303676876',
    appId: '1:266303676876:web:2ab417fe6d09be56457d69',
    measurementId: 'G-3L22VJ3LVW'
  }

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  const { userState } = useContext(AppContext)
  const [user, setUser] = userState

  const [email, setEmail] = useState<string|null>('')
  const [name, setName] = useState<string|null>('')
  const [pic, setPic] = useState<string|null>('')

  const [showProfile, setShowProfile] = useState(false)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user1) => {
      if (user1 !== null) {
        setEmail(user1.email)
        setPic(user1.photoURL)
        setUser(user1.uid)
        setName(user1.displayName)
      } else setUser('')
    })
  }, [setUser])

  const logOut = (): void => {
    const auth = getAuth()
    signOut(auth).then(() => {
      setUser('')
      setEmail('')
      setName('')
      setPic('')
    }).catch((error) => {
      console.error(error)
    })
  }

  return (
    <>
      <Nav pic={pic} onShow={() => setShowProfile(true)} />
      <main>
        {
          user === 'loading'
            ? <Loader />
            : user === ''
              ? <div className='landing'>
                  <HomeCarousel />
                  <Auth />
                </div>
              : <LoggedIn db={db} name={name} />
        }
        <div className='ellipse ellipse-tr'><img src={EllipseTR} alt='Vitty' /></div>
        <div className='ellipse ellipse-bl'><img src={EllipseBL} alt='Vitty' /></div>
        {showProfile &&
          <Profile
            onClose={() => { setShowProfile(false) }}
            onLogOut={() => {
              logOut()
              setShowProfile(false)
            }}
            name={name}
            email={email}
          />}
      </main>
    </>
  )
}

export default App
