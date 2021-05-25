// window.onload = function () {
//   if (window.localStorage.getItem('uid') !== null) {
//     window.location.assign('instructions.html')
//   }
// }
const loader = document.querySelector('.loader')
document.querySelector('.login').addEventListener('click', googleLogin)
function googleLogin () {
  const loader = document.querySelector('.loader')
  loader.className = 'loader'
  window.chrome.runtime.sendMessage('login', (response) => {
    if (response === 'Success') {
      // loader.className += ' hidden'
      // window.location.assign('instructions.html')
    }
    console.log(response)
  })
}

function check() {
  if (window.localStorage.getItem('uid') !== null) {
    loader.className += ' hidden'
    window.location.assign('instructions.html')
  } else {
    setTimeout(check, 100);
  }
}

setTimeout(check, 0);