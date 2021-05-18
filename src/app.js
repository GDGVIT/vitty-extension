const mon = document.querySelectorAll('.mon')[0]
const tue = document.querySelectorAll('.tue')[0]
const wed = document.querySelectorAll('.wed')[0]
const thu = document.querySelectorAll('.thu')[0]
const fri = document.querySelectorAll('.fri')[0]
const sat = document.querySelectorAll('.sat')[0]
const sun = document.querySelectorAll('.sun')[0]
const main = document.querySelectorAll('.main')[0]
const upload = document.querySelectorAll('.upload1')[0]
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
    const stime = mon1[monday[i].Slot]
    const time = new Date('April 1 2021 ' + mon1[monday[i].Slot] + ':00')
    const addMinutes = function (dt, minutes) {
      return new Date(dt.getTime() + minutes * 60000)
    }
    const time1 = addMinutes(time, 45)
    const eth = time1.getHours()
    const rep = time1.getMinutes().toString().length % 2
    let etm = ''
    if (rep === 1) {
      etm = '0' + time1.getMinutes().toString()
    } else {
      etm = time1.getMinutes().toString()
    }
    const etime = eth.toString() + ':' + etm
    const fintime = stime.toString() + ' - ' + etime
    text =
      text +
      `
  <div class="main1">
  <div class="details">
      <div class="name">${monday[i].Course_Name}</div>
      <div class="time">${fintime}</div>
      <div class="det">
        <div class="detcont1">${monday[i].Slot}</div>
        <div class="detcont2">${monday[i].Venue}</div>
      </div>
  </div>
  <div class="edit">Edit</div>
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
        .then((response) => response.json())
        .then((result) => {
          document.querySelectorAll('.name')[j].innerHTML =
            result.Slots[0].Course_Name
          document.querySelectorAll('.detcont1')[j].innerHTML =
            result.Slots[0].Slot
          document.querySelectorAll('.detcont2')[j].innerHTML =
            result.Slots[0].Venue
          monday[j] = result.Slots[0]
          console.log(monday)
          window.localStorage.setItem('monday', JSON.stringify(monday))
        })
        .catch((error) => console.log('error', error))
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
    const stime = mon1[monday[i].Slot]
    const time = new Date('April 1 2021 ' + mon1[monday[i].Slot] + ':00')
    const addMinutes = function (dt, minutes) {
      return new Date(dt.getTime() + minutes * 60000)
    }
    const time1 = addMinutes(time, 45)
    const eth = time1.getHours()
    const rep = time1.getMinutes().toString().length % 2
    let etm = ''
    if (rep === 1) {
      etm = '0' + time1.getMinutes().toString()
    } else {
      etm = time1.getMinutes().toString()
    }
    const etime = eth.toString() + ':' + etm
    const fintime = stime.toString() + ' - ' + etime
    text =
      text +
      `
  <div class="main1">
  <div class="details">
      <div class="name">${monday[i].Course_Name}</div>
      <div class="time">${fintime}</div>
      <div class="det">
        <div class="detcont">${monday[i].Slot}</div>
        <div class="detcont">${monday[i].Venue}</div>
      </div>
  </div>
  <div class="edit">Edit</div>
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
        .then((response) => response.json())
        .then((result) => {
          document.querySelectorAll('.name')[j].innerHTML =
            result.Slots[0].Course_Name
          monday[j] = result.Slots[0]
          console.log(monday)
          window.localStorage.setItem('monday', JSON.stringify(monday))
        })
        .catch((error) => console.log('error', error))
    })
  }
})
tue.addEventListener('click', function () {
  remove()
  tue.id = 'special'
  const tuesday = JSON.parse(window.localStorage.getItem('tuesday'))
  let text = ''
  for (let i = 0; i < tuesday.length; i++) {
    const stime = tue1[tuesday[i].Slot]
    const time = new Date('April 1 2021 ' + tue1[tuesday[i].Slot] + ':00')
    const addMinutes = function (dt, minutes) {
      return new Date(dt.getTime() + minutes * 60000)
    }
    const time1 = addMinutes(time, 45)
    const eth = time1.getHours()
    const rep = time1.getMinutes().toString().length % 2
    let etm = ''
    if (rep === 1) {
      etm = '0' + time1.getMinutes().toString()
    } else {
      etm = time1.getMinutes().toString()
    }
    const etime = eth.toString() + ':' + etm
    const fintime = stime.toString() + ' - ' + etime
    text =
      text +
      `
  <div class="main1">
  <div class="details">
      <div class="name">${tuesday[i].Course_Name}</div>
      <div class="time">${fintime}</div>
      <div class="det">
        <div class="detcont">${tuesday[i].Slot}</div>
        <div class="detcont">${tuesday[i].Venue}</div>
      </div>
  </div>
  <div class="edit">Edit</div>
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
        .then((response) => response.json())
        .then((result) => {
          document.querySelectorAll('.name')[j].innerHTML =
            result.Slots[0].Course_Name
          tuesday[j] = result.Slots[0]
          console.log(tuesday)
          window.localStorage.setItem('tuesday', JSON.stringify(tuesday))
        })
        .catch((error) => console.log('error', error))
    })
  }
})
wed.addEventListener('click', function () {
  remove()
  wed.id = 'special'
  const wednesday = JSON.parse(window.localStorage.getItem('wednesday'))
  let text = ''
  for (let i = 0; i < wednesday.length; i++) {
    const stime = wed1[wednesday[i].Slot]
    const time = new Date('April 1 2021 ' + wed1[wednesday[i].Slot] + ':00')
    const addMinutes = function (dt, minutes) {
      return new Date(dt.getTime() + minutes * 60000)
    }
    const time1 = addMinutes(time, 45)
    const eth = time1.getHours()
    const rep = time1.getMinutes().toString().length % 2
    let etm = ''
    if (rep === 1) {
      etm = '0' + time1.getMinutes().toString()
    } else {
      etm = time1.getMinutes().toString()
    }
    const etime = eth.toString() + ':' + etm
    const fintime = stime.toString() + ' - ' + etime
    text =
      text +
      `
  <div class="main1">
  <div class="details">
      <div class="name">${wednesday[i].Course_Name}</div>
      <div class="time">${fintime}</div>
      <div class="det">
        <div class="detcont">${wednesday[i].Slot}</div>
        <div class="detcont">${wednesday[i].Venue}</div>
      </div>
  </div>
  <div class="edit">Edit</div>
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
        .then((response) => response.json())
        .then((result) => {
          document.querySelectorAll('.name')[j].innerHTML =
            result.Slots[0].Course_Name
          wednesday[j] = result.Slots[0]
          console.log(wednesday)
          window.localStorage.setItem('wednesday', JSON.stringify(wednesday))
        })
        .catch((error) => console.log('error', error))
    })
  }
})
thu.addEventListener('click', function () {
  remove()
  thu.id = 'special'
  const thursday = JSON.parse(window.localStorage.getItem('thursday'))
  let text = ''
  for (let i = 0; i < thursday.length; i++) {
    const stime = thu1[thursday[i].Slot]
    const time = new Date('April 1 2021 ' + thu1[thursday[i].Slot] + ':00')
    const addMinutes = function (dt, minutes) {
      return new Date(dt.getTime() + minutes * 60000)
    }
    const time1 = addMinutes(time, 45)
    const eth = time1.getHours()
    const rep = time1.getMinutes().toString().length % 2
    let etm = ''
    if (rep === 1) {
      etm = '0' + time1.getMinutes().toString()
    } else {
      etm = time1.getMinutes().toString()
    }
    const etime = eth.toString() + ':' + etm
    const fintime = stime.toString() + ' - ' + etime
    text =
      text +
      `
  <div class="main1">
  <div class="details">
      <div class="name">${thursday[i].Course_Name}</div>
      <div class="time">${fintime}</div>
      <div class="det">
        <div class="detcont">${thursday[i].Slot}</div>
        <div class="detcont">${thursday[i].Venue}</div>
      </div>
  </div>
  <div class="edit">Edit</div>
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
        .then((response) => response.json())
        .then((result) => {
          document.querySelectorAll('.name')[j].innerHTML =
            result.Slots[0].Course_Name
          thursday[j] = result.Slots[0]
          console.log(thursday)
          window.localStorage.setItem('thursday', JSON.stringify(thursday))
        })
        .catch((error) => console.log('error', error))
    })
  }
})
fri.addEventListener('click', function () {
  remove()
  fri.id = 'special'
  const friday = JSON.parse(window.localStorage.getItem('friday'))
  let text = ''
  for (let i = 0; i < friday.length; i++) {
    const stime = fri1[friday[i].Slot]
    const time = new Date('April 1 2021 ' + fri1[friday[i].Slot] + ':00')
    const addMinutes = function (dt, minutes) {
      return new Date(dt.getTime() + minutes * 60000)
    }
    const time1 = addMinutes(time, 45)
    const eth = time1.getHours()
    const rep = time1.getMinutes().toString().length % 2
    let etm = ''
    if (rep === 1) {
      etm = '0' + time1.getMinutes().toString()
    } else {
      etm = time1.getMinutes().toString()
    }
    const etime = eth.toString() + ':' + etm
    const fintime = stime.toString() + ' - ' + etime
    text =
      text +
      `
  <div class="main1">
  <div class="details">
      <div class="name">${friday[i].Course_Name}</div>
      <div class="time">${fintime}</div>
      <div class="det">
        <div class="detcont">${friday[i].Slot}</div>
        <div class="detcont">${friday[i].Venue}</div>
      </div>
  </div>
  <div class="edit">Edit</div>
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
        .then((response) => response.json())
        .then((result) => {
          document.querySelectorAll('.name')[j].innerHTML =
            result.Slots[0].Course_Name
          friday[j] = result.Slots[0]
          console.log(friday)
          window.localStorage.setItem('friday', JSON.stringify(friday))
        })
        .catch((error) => console.log('error', error))
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
  chrome.runtime.sendMessage('upload-data', (response) => {
    console.log('uploaded data ', response)
  })
})
