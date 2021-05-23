const mon = ['A1', 'L1', 'F1', 'L2', 'D1', 'L3', 'TB1', 'L4', 'TG1', 'L5', 'L6', 'A2', 'L31', 'F2', 'L32', 'D2', 'L33', 'TB2', 'L34', 'TG2', 'L35', 'V3', 'L36']
const tue = ['B1', 'L7', 'G1', 'L8', 'E1', 'L9', 'TC1', 'L10', 'TAA1', 'L11', 'L12', 'B2', 'L37', 'G2', 'L38', 'E2', 'L39', 'TC2', 'L40', 'TAA2', 'L41', 'V4', 'L42']
const wed = ['C1', 'L13', 'A1', 'L14', 'F1', 'L15', 'V1', 'L16', 'V2', 'C2', 'L43', 'A2', 'L44', 'F2', 'L45', 'TD2', 'L46', 'TBB2', 'L47', 'V5', 'L48', 'L17', 'L18']
const thu = ['D1', 'L19', 'B1', 'L20', 'G1', 'L21', 'TE1', 'L22', 'TCC1', 'L23', 'L24', 'D2', 'L49', 'B2', 'L50', 'G2', 'L51', 'TE2', 'L52', 'TCC2', 'L53', 'V6', 'L54']
const fri = ['E1', 'L25', 'C1', 'L26', 'TA1', 'L27', 'TF1', 'L28', 'TD1', 'L29', 'L30', 'E2', 'L55', 'C2', 'L56', 'TA2', 'L57', 'TF2', 'L58', 'TDD2', 'L59', 'V7', 'L60']
const filled = []
const mon1 = []
const tue1 = []
const wed1 = []
const thu1 = []
const fri1 = []
const mon11 = {
  A1: '08:00',
  L1: '08:00',
  F1: '09:00',
  // L2: '08:45',
  D1: '10:00',
  L3: '10:00',
  TB1: '11:00',
  // L4: '10:45',
  TG1: '12:00',
  L5: '11:30',
  // L6: '12:15',
  A2: '14:00',
  L31: '14:00',
  F2: '15:00',
  // L32: '14:45',
  D2: '16:00',
  L33: '16:00',
  TB2: '17:00',
  // L34: '16:45',
  TG2: '18:00',
  L35: '17:30',
  V3: '19:00'
  // L36: '18:15'
}
const tue11 = {
  B1: '08:00',
  L7: '08:00',
  G1: '09:00',
  // L8: '08:45',
  E1: '10:00',
  L9: '10:00',
  TC1: '11:00',
  // L10: '10:45',
  TAA1: '12:00',
  L11: '11:30',
  // L12: '12:15',
  B2: '14:00',
  L37: '14:00',
  G2: '15:00',
  // L38: '14:45',
  E2: '16:00',
  L39: '16:00',
  TC2: '17:00',
  // L40: '16:45',
  TAA2: '18:00',
  L41: '17:30',
  V4: '19:00'
  // L42: '18:15'
}
const wed11 = {
  C1: '08:00',
  L13: '08:00',
  A1: '09:00',
  // L14: '08:45',
  F1: '10:00',
  L15: '10:00',
  V1: '11:00',
  // L16: '10:45',
  V2: '12:00',
  L17: '11:30',
  // L18: '12:15',
  C2: '14:00',
  L43: '14:00',
  A2: '15:00',
  // L44: '14:45',
  F2: '16:00',
  L45: '16:00',
  TD2: '17:00',
  // L46: '16:45',
  TBB2: '18:00',
  L47: '17:30',
  V5: '19:00'
  // L48: '18:15'
}
const thu11 = {
  D1: '08:00',
  L19: '08:00',
  B1: '09:00',
  // L20: '08:45',
  G1: '10:00',
  L21: '10:00',
  TE1: '11:00',
  // L22: '10:45',
  TCC1: '12:00',
  L23: '11:30',
  // L24: '12:15',
  D2: '14:00',
  L49: '14:00',
  B2: '15:00',
  // L50: '14:45',
  G2: '16:00',
  L51: '16:00',
  TE2: '17:00',
  // L52: '16:45',
  TCC2: '18:00',
  L53: '17:30',
  V6: '19:00'
  // L54: '18:15'
}
const fri11 = {
  E1: '08:00',
  L25: '08:00',
  C1: '09:00',
  // L26: '08:45',
  TA1: '10:00',
  L27: '10:00',
  TF1: '11:00',
  // L28: '10:45',
  TD1: '12:00',
  L29: '11:30',
  // L30: '12:15',
  E2: '14:00',
  L55: '14:00',
  C2: '15:00',
  // L56: '14:45',
  TA2: '16:00',
  L57: '16:00',
  TF2: '17:00',
  // L58: '16:45',
  TDD2: '18:00',
  L59: '17:30',
  V7: '19:00'
  // L60: '18:15'
}
window.onload = function () {
  if (window.localStorage.getItem('monday') !== null) {
    window.location.assign('index.html')
  }
}

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const loader = document.querySelector('.loader')
  loader.className = 'loader'
  const files = document.querySelector('[name=file]').files
  const myHeaders = new Headers()
  myHeaders.append('Accept', 'application/json')

  const formdata = new FormData()
  formdata.append('file', files[0])

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
  }

  fetch('http://13.233.74.155/uploadfile/', requestOptions)
    .then(response => response.json())
    .then(result => {
      if (result !== undefined) {
        loader.className += ' hidden'
      }
      result.Slots.forEach(element => {
        if (filled.includes(element.Slot) === false) {
          filled.push(element.Slot)
          if (mon.includes(element.Slot)) {
            if (mon11[element.Slot] !== undefined) {
              mon1.push(element)
            }
          }
          if (tue.includes(element.Slot)) {
            if (tue11[element.Slot] !== undefined) {
              tue1.push(element)
            }
          }
          if (wed.includes(element.Slot)) {
            if (wed11[element.Slot] !== undefined) {
              wed1.push(element)
            }
          }
          if (thu.includes(element.Slot)) {
            if (thu11[element.Slot] !== undefined) {
              thu1.push(element)
            }
          }
          if (fri.includes(element.Slot)) {
            if (fri11[element.Slot] !== undefined) {
              fri1.push(element)
            }
          }
        }
      })
      console.log(mon1)
      console.log(tue1)
      console.log(wed1)
      console.log(thu1)
      console.log(fri1)
      mon1.sort((a, b) => (new Date(mon11[a.Slot]) > new Date(mon11[b.Slot])) ? 1 : -1)
      tue1.sort((a, b) => (new Date(tue11[a.Slot]) > new Date(tue11[b.Slot])) ? 1 : -1)
      wed1.sort((a, b) => (new Date(wed11[a.Slot]) > new Date(wed11[b.Slot])) ? 1 : -1)
      thu1.sort((a, b) => (new Date(thu11[a.Slot]) > new Date(thu11[b.Slot])) ? 1 : -1)
      fri1.sort((a, b) => (new Date(fri11[a.Slot]) > new Date(fri11[b.Slot])) ? 1 : -1)
      mon1.reverse()
      tue1.reverse()
      wed1.reverse()
      thu1.reverse()
      fri1.reverse()
      window.localStorage.setItem('monday', JSON.stringify(mon1))
      window.localStorage.setItem('tuesday', JSON.stringify(tue1))
      window.localStorage.setItem('wednesday', JSON.stringify(wed1))
      window.localStorage.setItem('thursday', JSON.stringify(thu1))
      window.localStorage.setItem('friday', JSON.stringify(fri1))
      window.location.assign('index.html')
    })
    .catch(error => console.log('error', error))
})

// db.collection('timings').get().then((snapshot) => {
//   console.log(snapshot.docs)
//   snapshot.docs.forEach(doc => {
//     console.log(doc.id)
//   })
// })

document.querySelector('.login3').addEventListener('click', (e) => {
  const loader = document.querySelector('.loader')
  loader.className = 'loader'
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
      if (result !== undefined) {
        loader.className += ' hidden'
      }
      result.Slots.forEach(element => {
        if (filled.includes(element.Slot) === false) {
          filled.push(element.Slot)
          if (mon.includes(element.Slot)) {
            if (mon11[element.Slot] !== undefined) {
              mon1.push(element)
            }
          }
          if (tue.includes(element.Slot)) {
            if (tue11[element.Slot] !== undefined) {
              tue1.push(element)
            }
          }
          if (wed.includes(element.Slot)) {
            if (wed11[element.Slot] !== undefined) {
              wed1.push(element)
            }
          }
          if (thu.includes(element.Slot)) {
            if (thu11[element.Slot] !== undefined) {
              thu1.push(element)
            }
          }
          if (fri.includes(element.Slot)) {
            if (fri11[element.Slot] !== undefined) {
              fri1.push(element)
            }
          }
        }
      })
      console.log(mon1)
      console.log(tue1)
      console.log(wed1)
      console.log(thu1)
      console.log(fri1)
      mon1.sort((a, b) => (new Date(mon11[a.Slot]) > new Date(mon11[b.Slot])) ? 1 : -1)
      tue1.sort((a, b) => (new Date(tue11[a.Slot]) > new Date(tue11[b.Slot])) ? 1 : -1)
      wed1.sort((a, b) => (new Date(wed11[a.Slot]) > new Date(wed11[b.Slot])) ? 1 : -1)
      thu1.sort((a, b) => (new Date(thu11[a.Slot]) > new Date(thu11[b.Slot])) ? 1 : -1)
      fri1.sort((a, b) => (new Date(fri11[a.Slot]) > new Date(fri11[b.Slot])) ? 1 : -1)
      mon1.reverse()
      tue1.reverse()
      wed1.reverse()
      thu1.reverse()
      fri1.reverse()
      const exc = wed1[2]
      wed1[2] = wed1[1]
      wed1[1] = wed1[0]
      wed1[0] = exc
      window.localStorage.setItem('monday', JSON.stringify(mon1))
      window.localStorage.setItem('tuesday', JSON.stringify(tue1))
      window.localStorage.setItem('wednesday', JSON.stringify(wed1))
      window.localStorage.setItem('thursday', JSON.stringify(thu1))
      window.localStorage.setItem('friday', JSON.stringify(fri1))
      window.location.assign('index.html')
    })
    .catch((error) => console.log('error', error))
})
