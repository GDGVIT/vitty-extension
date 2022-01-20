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
    apiKey: 'AIzaSyCm61E2xdQgQJGaOupsnEiARFhk2FNmub4',
    authDomain: 'vitty-dscvit.firebaseapp.com',
    projectId: 'vitty-dscvit',
    storageBucket: 'vitty-dscvit.appspot.com',
    messagingSenderId: '272763363329',
    appId: '1:272763363329:web:03c63b25f47d2414e2e000',
    measurementId: 'G-8KRDV5SK87'
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
              : <LoggedIn db={db} />
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
