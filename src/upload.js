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
const tue11 = {
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
const wed11 = {
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
const thu11 = {
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
const fri11 = {
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
  if (window.localStorage.getItem('found') !== null) {
    if (window.localStorage.getItem('found') === 'true') {
      window.location.assign('index.html')
    }
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
            mon1.push(element)
          }
          if (tue.includes(element.Slot)) {
            tue1.push(element)
          }
          if (wed.includes(element.Slot)) {
            wed1.push(element)
          }
          if (thu.includes(element.Slot)) {
            thu1.push(element)
          }
          if (fri.includes(element.Slot)) {
            fri1.push(element)
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
            mon1.push(element)
          }
          if (tue.includes(element.Slot)) {
            tue1.push(element)
          }
          if (wed.includes(element.Slot)) {
            wed1.push(element)
          }
          if (thu.includes(element.Slot)) {
            thu1.push(element)
          }
          if (fri.includes(element.Slot)) {
            fri1.push(element)
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
    .catch((error) => console.log('error', error))
})
