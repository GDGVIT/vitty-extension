import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

export {}

chrome.alarms.onAlarm.addListener((alarm) => {
  chrome.notifications.create('upcomingclass', {
    title: 'You have a class in 5 mins!',
    type: 'basic',
    message: alarm.name.slice(2),
    iconUrl: './logo.png',
    priority: 2
  })
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const firebaseConfig = {
    apiKey: 'AIzaSyCm61E2xdQgQJGaOupsnEiARFhk2FNmub4',
    authDomain: 'vitty-dscvit.firebaseapp.com',
    projectId: 'vitty-dscvit',
    storageBucket: 'vitty-dscvit.appspot.com',
    messagingSenderId: '272763363329',
    appId: '1:272763363329:web:03c63b25f47d2414e2e000',
    measurementId: 'G-8KRDV5SK87'
  }

  initializeApp(firebaseConfig)
  if (message === 'loginGoogle') {
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const userId = result.user.uid
        sendResponse(userId)
      }).catch(err => {
        console.log(err)
      })
  }
})
