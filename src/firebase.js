const firebaseConfig = {
  apiKey: 'AIzaSyCm61E2xdQgQJGaOupsnEiARFhk2FNmub4',
  authDomain: 'vitty-dscvit.firebaseapp.com',
  projectId: 'vitty-dscvit',
  databaseURL: 'https://vitty-dscvit.firebaseio.com',
  storageBucket: 'vitty-dscvit.appspot.com',
  messagingSenderId: '272763363329',
  appId: '1:272763363329:web:03c63b25f47d2414e2e000',
  measurementId: 'G-8KRDV5SK87'
}
const provider = new firebase.auth.GoogleAuthProvider()
const mon1 = {
  A1: '08:00',
  L1: '08:00',
  F1: '09:00',
  L2: '08:46',
  D1: '10:00',
  L3: '10:00',
  TB1: '11:00',
  L4: '10:46',
  TG1: '12:00',
  L5: '11:31',
  L6: '12:16',
  A2: '14:00',
  L31: '14:00',
  F2: '15:00',
  L32: '14:46',
  D2: '16:00',
  L33: '16:00',
  TB2: '17:00',
  L34: '16:46',
  TG2: '18:00',
  L35: '17:31',
  V3: '19:01',
  L36: '18:16'
}
const tue1 = {
  B1: '08:00',
  L7: '08:00',
  G1: '09:00',
  L8: '08:46',
  E1: '10:00',
  L9: '10:00',
  TC1: '11:00',
  L10: '10:46',
  TAA1: '12:00',
  L11: '11:31',
  L12: '12:16',
  B2: '14:00',
  L37: '14:00',
  G2: '15:00',
  L38: '14:46',
  E2: '16:00',
  L39: '16:00',
  TC2: '17:00',
  L40: '16:46',
  TAA2: '18:00',
  L41: '17:31',
  V4: '19:01',
  L42: '18:16'
}
const wed1 = {
  C1: '08:00',
  L13: '08:00',
  A1: '09:00',
  L14: '08:46',
  F1: '10:00',
  L15: '10:00',
  V1: '11:00',
  L16: '10:46',
  V2: '12:00',
  L17: '11:31',
  L18: '12:16',
  C2: '14:00',
  L43: '14:00',
  A2: '15:00',
  L44: '14:46',
  F2: '16:00',
  L45: '16:00',
  TD2: '17:00',
  L46: '16:46',
  TBB2: '18:00',
  L47: '17:31',
  V5: '19:01',
  L48: '18:16'
}
const thu1 = {
  D1: '08:00',
  L19: '08:00',
  B1: '09:00',
  L20: '08:46',
  G1: '10:00',
  L21: '10:00',
  TE1: '11:00',
  L22: '10:46',
  TCC1: '12:00',
  L23: '11:31',
  L24: '12:16',
  D2: '14:00',
  L49: '14:00',
  B2: '15:00',
  L50: '14:46',
  G2: '16:00',
  L51: '16:00',
  TE2: '17:00',
  L52: '16:46',
  TCC2: '18:00',
  L53: '17:31',
  V6: '19:01',
  L54: '18:16'
}
const fri1 = {
  E1: '08:00',
  L25: '08:00',
  C1: '09:00',
  L26: '08:46',
  TA1: '10:00',
  L27: '10:00',
  TF1: '11:00',
  L28: '10:46',
  TD1: '12:00',
  L29: '11:31',
  L30: '12:16',
  E2: '14:00',
  L55: '14:00',
  C2: '15:00',
  L56: '14:46',
  TA2: '16:00',
  L57: '16:00',
  TF2: '17:00',
  L58: '16:46',
  TDD2: '18:00',
  L59: '17:31',
  V7: '19:01',
  L60: '18:16'
}
firebase.initializeApp(firebaseConfig)
firebase.analytics()
const db = firebase.firestore()
db.settings({ timestampsInSnapshots: true })

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === 'upload-data') {
    const userid = window.localStorage.getItem('uid')
    const monday = JSON.parse(window.localStorage.getItem('monday'))
    const tuesday = JSON.parse(window.localStorage.getItem('tuesday'))
    const wednesday = JSON.parse(window.localStorage.getItem('wednesday'))
    const thursday = JSON.parse(window.localStorage.getItem('thursday'))
    const friday = JSON.parse(window.localStorage.getItem('friday'))
    for (let i = 0; i < monday.length; i++) {
      const time = new Date('April 1 2021 ' + mon1[monday[i].Slot] + ':00')
      const addMinutes = function (dt, minutes) {
        return new Date(dt.getTime() + minutes * 60000)
      }
      const time1 = addMinutes(time, 45)
      db.collection('users')
        .doc(userid)
        .collection('timetable')
        .doc('monday')
        .collection('periods')
        .add({
          slot: monday[i].Slot,
          courseCode: monday[i].Course_Name,
          courseName: monday[i].Course_Name,
          Course_type: monday[i].Course_type,
          location: monday[i].Venue,
          endTime: time1,
          startTime: time
        })
    }
    for (let i = 0; i < tuesday.length; i++) {
      const time = new Date('April 1 2021 ' + tue1[tuesday[i].Slot] + ':00')
      const addMinutes = function (dt, minutes) {
        return new Date(dt.getTime() + minutes * 60000)
      }
      const time1 = addMinutes(time, 45)
      db.collection('users')
        .doc(userid)
        .collection('timetable')
        .doc('tuesday')
        .collection('periods')
        .add({
          slot: tuesday[i].Slot,
          courseCode: tuesday[i].Course_Name,
          courseName: tuesday[i].Course_Name,
          Course_type: tuesday[i].Course_type,
          location: tuesday[i].Venue,
          endTime: time1,
          startTime: time
        })
    }
    for (let i = 0; i < wednesday.length; i++) {
      const time = new Date('April 1 2021 ' + wed1[wednesday[i].Slot] + ':00')
      const addMinutes = function (dt, minutes) {
        return new Date(dt.getTime() + minutes * 60000)
      }
      const time1 = addMinutes(time, 45)
      db.collection('users')
        .doc(userid)
        .collection('timetable')
        .doc('wednesday')
        .collection('periods')
        .add({
          slot: wednesday[i].Slot,
          courseCode: wednesday[i].Course_Name,
          courseName: wednesday[i].Course_Name,
          Course_type: wednesday[i].Course_type,
          location: wednesday[i].Venue,
          endTime: time1,
          startTime: time
        })
    }
    for (let i = 0; i < thursday.length; i++) {
      const time = new Date('April 1 2021 ' + thu1[thursday[i].Slot] + ':00')
      const addMinutes = function (dt, minutes) {
        return new Date(dt.getTime() + minutes * 60000)
      }
      const time1 = addMinutes(time, 45)
      db.collection('users')
        .doc(userid)
        .collection('timetable')
        .doc('thursday')
        .collection('periods')
        .add({
          slot: thursday[i].Slot,
          courseCode: thursday[i].Course_Name,
          courseName: thursday[i].Course_Name,
          Course_type: thursday[i].Course_type,
          location: thursday[i].Venue,
          endTime: time1,
          startTime: time
        })
    }
    for (let i = 0; i < friday.length; i++) {
      const time = new Date('April 1 2021 ' + fri1[friday[i].Slot] + ':00')
      const addMinutes = function (dt, minutes) {
        return new Date(dt.getTime() + minutes * 60000)
      }
      const time1 = addMinutes(time, 45)
      db.collection('users')
        .doc(userid)
        .collection('timetable')
        .doc('friday')
        .collection('periods')
        .add({
          slot: friday[i].Slot,
          courseCode: friday[i].Course_Name,
          courseName: friday[i].Course_Name,
          Course_type: friday[i].Course_type,
          location: friday[i].Venue,
          endTime: time1,
          startTime: time
        })
    }
    db.collection('users').doc(userid).set({
      isTimetableAvailable: true,
      isUpdated: true
    })
    sendResponse('successfully')
  }
  if (message === 'login') {
    let found = false
    firebase.auth().signInWithPopup(provider).then(res => {
      console.log(res.user.uid.toString())
      window.localStorage.setItem('uid', res.user.uid.toString())
      db.collection('users').doc(res.user.uid.toString()).get().then((snapshot) => {
        console.log(snapshot.docs)
        if (snapshot.docs === undefined) {
          console.log('notFound')
        } else {
          console.log('Found')
          found = true
        }
      })
    }).catch(e => {
      console.log(e)
    })
    console.log(found)
    sendResponse(found)
  }
})
