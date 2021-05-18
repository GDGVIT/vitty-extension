const mon = ['A1', 'L1', 'F1', 'L2', 'D1', 'L3', 'TB1', 'L4', 'TG1', 'L5', 'L6', 'A2', 'L31', 'F2', 'L32', 'D2', 'L33', 'TB2', 'L34', 'TG2', 'L35', 'V3', 'L36']
const tue = ['B1', 'L7', 'G1', 'L8', 'E1', 'L9', 'TC1', 'L10', 'TAA1', 'L11', 'L12', 'B2', 'L37', 'G2', 'L38', 'E2', 'L39', 'TC2', 'L40', 'TAA2', 'L41', 'V4', 'L42']
const wed = ['C1', 'L13', 'A1', 'L14', 'F1', 'L15', 'V1', 'L16', 'V2', 'C2', 'L43', 'A2', 'L44', 'F2', 'L45', 'TD2', 'L46', 'TBB2', 'L47', 'V5', 'L48','L17','L18']
const thu = ['D1', 'L19', 'B1', 'L20', 'G1', 'L21', 'TE1', 'L22', 'TCC1', 'L23', 'L24', 'D2', 'L49', 'B2', 'L50', 'G2', 'L51', 'TE2', 'L52', 'TCC2', 'L53', 'V6', 'L54']
const fri = ['E1', 'L25', 'C1', 'L26', 'TA1', 'L27', 'TF1', 'L28', 'TD1', 'L29', 'L30', 'E2', 'L55', 'C2', 'L56', 'TA2', 'L57', 'TF2', 'L58', 'TDD2', 'L59', 'V7', 'L60']
const filled = []
const mon1 = []
const tue1 = []
const wed1 = []
const thu1 = []
const fri1 = []

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
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
