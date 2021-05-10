const db = window.firebase.firestore()
db.settings({ timestampsInSnapshots: true })
const mon = document.querySelectorAll('.mon')[0]
const tue = document.querySelectorAll('.tue')[0]
const wed = document.querySelectorAll('.wed')[0]
const thu = document.querySelectorAll('.thu')[0]
const fri = document.querySelectorAll('.fri')[0]
const sat = document.querySelectorAll('.sat')[0]
const sun = document.querySelectorAll('.sun')[0]
const main = document.querySelectorAll('.main')[0]
const upload = document.querySelectorAll('.upload1')[0]

window.onload = function () {
  const monday = JSON.parse(window.localStorage.getItem('monday'))
  const tuesday = JSON.parse(window.localStorage.getItem('tuesday'))
  const wednesday = JSON.parse(window.localStorage.getItem('wednesday'))
  const thursday = JSON.parse(window.localStorage.getItem('thursday'))
  const friday = JSON.parse(window.localStorage.getItem('friday'))
  window.console.log(monday)
  window.console.log(tuesday)
  window.console.log(wednesday)
  window.console.log(thursday)
  window.console.log(friday)
  let text = ''
  for (let i = 0; i < monday.length; i++) {
    text = text +
  `
  <div class="main1">
  <div class="details">
      <div class="name">${monday[i].Course_Name}</div>
      <div class="time">8:00 AM - 8:40 AM</div>
  </div>
  <div class="edit">Edit</div>
  <div class="arrow"><img src="../images/Vector.svg" alt="dropdown arrow" class="src"></div>
</div>
  `
  }
  main.innerHTML = text
  for (let j = 0; j < monday.length; j++) {
    document.querySelectorAll('.edit')[j].addEventListener('click', () => {
      const det = window.prompt('Enter details')
      console.log(det)
      const myHeaders = new Headers()
      myHeaders.append('Accept', 'application/json')
      myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

      const urlencoded = new URLSearchParams()
      urlencoded.append('request', det)

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
      }

      fetch('http://13.233.74.155/uploadtext/', requestOptions)
        .then(response => response.json())
        .then(result => {
          document.querySelectorAll('.name')[j].innerHTML = result.Slots[0].Course_Name
          monday[j] = result.Slots[0]
          console.log(monday)
          window.localStorage.setItem('monday', JSON.stringify(monday))
        })
        .catch(error => console.log('error', error))
    })
  }
}

function remove () {
  mon.removeAttribute('id')
  tue.removeAttribute('id')
  wed.removeAttribute('id')
  thu.removeAttribute('id')
  fri.removeAttribute('id')
  sat.removeAttribute('id')
  sun.removeAttribute('id')
}

mon.addEventListener('click', function () {
  remove()
  mon.id = 'special'
  const monday = JSON.parse(window.localStorage.getItem('monday'))
  let text = ''
  for (let i = 0; i < monday.length; i++) {
    text = text +
  `
  <div class="main1">
  <div class="details">
      <div class="name">${monday[i].Course_Name}</div>
      <div class="time">8:00 AM - 8:40 AM</div>
  </div>
  <div class="edit">Edit</div>
  <div class="arrow"><img src="../images/Vector.svg" alt="dropdown arrow" class="src"></div>
</div>
  `
  }
  main.innerHTML = text
  for (let j = 0; j < monday.length; j++) {
    document.querySelectorAll('.edit')[j].addEventListener('click', () => {
      const det = window.prompt('Enter details')
      console.log(det)
      const myHeaders = new Headers()
      myHeaders.append('Accept', 'application/json')
      myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

      const urlencoded = new URLSearchParams()
      urlencoded.append('request', det)

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
      }

      fetch('http://13.233.74.155/uploadtext/', requestOptions)
        .then(response => response.json())
        .then(result => {
          document.querySelectorAll('.name')[j].innerHTML = result.Slots[0].Course_Name
          monday[j] = result.Slots[0]
          console.log(monday)
          window.localStorage.setItem('monday', JSON.stringify(monday))
        })
        .catch(error => console.log('error', error))
    })
  }
})
tue.addEventListener('click', function () {
  remove()
  tue.id = 'special'
  const tuesday = JSON.parse(window.localStorage.getItem('tuesday'))
  let text = ''
  for (let i = 0; i < tuesday.length; i++) {
    text = text +
  `
  <div class="main1">
  <div class="details">
      <div class="name">${tuesday[i].Course_Name}</div>
      <div class="time">8:00 AM - 8:40 AM</div>
  </div>
  <div class="edit">Edit</div>
  <div class="arrow"><img src="../images/Vector.svg" alt="dropdown arrow" class="src"></div>
</div>
  `
  }
  main.innerHTML = text
  for (let j = 0; j < tuesday.length; j++) {
    document.querySelectorAll('.edit')[j].addEventListener('click', () => {
      const det = window.prompt('Enter details')
      console.log(det)
      const myHeaders = new Headers()
      myHeaders.append('Accept', 'application/json')
      myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

      const urlencoded = new URLSearchParams()
      urlencoded.append('request', det)

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
      }

      fetch('http://13.233.74.155/uploadtext/', requestOptions)
        .then(response => response.json())
        .then(result => {
          document.querySelectorAll('.name')[j].innerHTML = result.Slots[0].Course_Name
          tuesday[j] = result.Slots[0]
          console.log(tuesday)
          window.localStorage.setItem('tuesday', JSON.stringify(tuesday))
        })
        .catch(error => console.log('error', error))
    })
  }
})
wed.addEventListener('click', function () {
  remove()
  wed.id = 'special'
  const wednesday = JSON.parse(window.localStorage.getItem('wednesday'))
  let text = ''
  for (let i = 0; i < wednesday.length; i++) {
    text = text +
  `
  <div class="main1">
  <div class="details">
      <div class="name">${wednesday[i].Course_Name}</div>
      <div class="time">8:00 AM - 8:40 AM</div>
  </div>
  <div class="edit">Edit</div>
  <div class="arrow"><img src="../images/Vector.svg" alt="dropdown arrow" class="src"></div>
</div>
  `
  }
  main.innerHTML = text
  for (let j = 0; j < wednesday.length; j++) {
    document.querySelectorAll('.edit')[j].addEventListener('click', () => {
      const det = window.prompt('Enter details')
      console.log(det)
      const myHeaders = new Headers()
      myHeaders.append('Accept', 'application/json')
      myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

      const urlencoded = new URLSearchParams()
      urlencoded.append('request', det)

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
      }

      fetch('http://13.233.74.155/uploadtext/', requestOptions)
        .then(response => response.json())
        .then(result => {
          document.querySelectorAll('.name')[j].innerHTML = result.Slots[0].Course_Name
          wednesday[j] = result.Slots[0]
          console.log(wednesday)
          window.localStorage.setItem('wednesday', JSON.stringify(wednesday))
        })
        .catch(error => console.log('error', error))
    })
  }
})
thu.addEventListener('click', function () {
  remove()
  thu.id = 'special'
  const thursday = JSON.parse(window.localStorage.getItem('thursday'))
  let text = ''
  for (let i = 0; i < thursday.length; i++) {
    text = text +
  `
  <div class="main1">
  <div class="details">
      <div class="name">${thursday[i].Course_Name}</div>
      <div class="time">8:00 AM - 8:40 AM</div>
  </div>
  <div class="edit">Edit</div>
  <div class="arrow"><img src="../images/Vector.svg" alt="dropdown arrow" class="src"></div>
</div>
  `
  }
  main.innerHTML = text
  for (let j = 0; j < thursday.length; j++) {
    document.querySelectorAll('.edit')[j].addEventListener('click', () => {
      const det = window.prompt('Enter details')
      console.log(det)
      const myHeaders = new Headers()
      myHeaders.append('Accept', 'application/json')
      myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

      const urlencoded = new URLSearchParams()
      urlencoded.append('request', det)

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
      }

      fetch('http://13.233.74.155/uploadtext/', requestOptions)
        .then(response => response.json())
        .then(result => {
          document.querySelectorAll('.name')[j].innerHTML = result.Slots[0].Course_Name
          thursday[j] = result.Slots[0]
          console.log(thursday)
          window.localStorage.setItem('thursday', JSON.stringify(thursday))
        })
        .catch(error => console.log('error', error))
    })
  }
})
fri.addEventListener('click', function () {
  remove()
  fri.id = 'special'
  const friday = JSON.parse(window.localStorage.getItem('friday'))
  let text = ''
  for (let i = 0; i < friday.length; i++) {
    text = text +
  `
  <div class="main1">
  <div class="details">
      <div class="name">${friday[i].Course_Name}</div>
      <div class="time">8:00 AM - 8:40 AM</div>
  </div>
  <div class="edit">Edit</div>
  <div class="arrow"><img src="../images/Vector.svg" alt="dropdown arrow" class="src"></div>
</div>
  `
  }
  main.innerHTML = text
  for (let j = 0; j < friday.length; j++) {
    document.querySelectorAll('.edit')[j].addEventListener('click', () => {
      const det = window.prompt('Enter details')
      console.log(det)
      const myHeaders = new Headers()
      myHeaders.append('Accept', 'application/json')
      myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

      const urlencoded = new URLSearchParams()
      urlencoded.append('request', det)

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
      }

      fetch('http://13.233.74.155/uploadtext/', requestOptions)
        .then(response => response.json())
        .then(result => {
          document.querySelectorAll('.name')[j].innerHTML = result.Slots[0].Course_Name
          friday[j] = result.Slots[0]
          console.log(friday)
          window.localStorage.setItem('friday', JSON.stringify(friday))
        })
        .catch(error => console.log('error', error))
    })
  }
})
sat.addEventListener('click', function () {
  remove()
  sat.id = 'special'
  main.innerHTML = ''
})
sun.addEventListener('click', function () {
  remove()
  sun.id = 'special'
  main.innerHTML = ''
})

upload.addEventListener('click', function () {
  const monday = JSON.parse(window.localStorage.getItem('monday'))
  const tuesday = JSON.parse(window.localStorage.getItem('tuesday'))
  const wednesday = JSON.parse(window.localStorage.getItem('wednesday'))
  const thursday = JSON.parse(window.localStorage.getItem('thursday'))
  const friday = JSON.parse(window.localStorage.getItem('friday'))
  for (let i = 0; i < monday.length; i++) {
    db.collection('users').doc('bSV6dmzNndR8VTo2hPHHuDZBZeD2').collection('timetable').doc('monday').collection('periods').add({
      slot: monday[i].Slot,
      courseCode: monday[i].Course_Name,
      courseName: monday[i].Course_Name,
      Course_type: monday[i].Course_type,
      location: monday[i].Venue,
      endTime: '8 May 2021 at 22:45:00 UTC+5:30',
      startTime: '8 May 2021 at 22:45:00 UTC+5:30'
    })
  }
  for (let i = 0; i < tuesday.length; i++) {
    db.collection('users').doc('bSV6dmzNndR8VTo2hPHHuDZBZeD2').collection('timetable').doc('tuesday').collection('periods').add({
      slot: tuesday[i].Slot,
      courseCode: tuesday[i].Course_Name,
      courseName: tuesday[i].Course_Name,
      Course_type: tuesday[i].Course_type,
      location: tuesday[i].Venue,
      endTime: '8 May 2021 at 22:45:00 UTC+5:30',
      startTime: '8 May 2021 at 22:45:00 UTC+5:30'
    })
  }
  for (let i = 0; i < wednesday.length; i++) {
    db.collection('users').doc('bSV6dmzNndR8VTo2hPHHuDZBZeD2').collection('timetable').doc('wednesday').collection('periods').add({
      slot: wednesday[i].Slot,
      courseCode: wednesday[i].Course_Name,
      courseName: wednesday[i].Course_Name,
      Course_type: wednesday[i].Course_type,
      location: wednesday[i].Venue,
      endTime: '8 May 2021 at 22:45:00 UTC+5:30',
      startTime: '8 May 2021 at 22:45:00 UTC+5:30'
    })
  }
  for (let i = 0; i < thursday.length; i++) {
    db.collection('users').doc('bSV6dmzNndR8VTo2hPHHuDZBZeD2').collection('timetable').doc('thursday').collection('periods').add({
      slot: thursday[i].Slot,
      courseCode: thursday[i].Course_Name,
      courseName: thursday[i].Course_Name,
      Course_type: thursday[i].Course_type,
      location: thursday[i].Venue,
      endTime: '8 May 2021 at 22:45:00 UTC+5:30',
      startTime: '8 May 2021 at 22:45:00 UTC+5:30'
    })
  }
  for (let i = 0; i < friday.length; i++) {
    db.collection('users').doc('bSV6dmzNndR8VTo2hPHHuDZBZeD2').collection('timetable').doc('friday').collection('periods').add({
      slot: friday[i].Slot,
      courseCode: friday[i].Course_Name,
      courseName: friday[i].Course_Name,
      Course_type: friday[i].Course_type,
      location: friday[i].Venue,
      endTime: '8 May 2021 at 22:45:00 UTC+5:30',
      startTime: '8 May 2021 at 22:45:00 UTC+5:30'
    })
  }
})
