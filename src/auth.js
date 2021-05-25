window.onload = function () {
  if (window.localStorage.getItem('uid') !== null) {
    window.location.assign('instructions.html')
  }
}

document.querySelector('.login').addEventListener('click', googleLogin)
function googleLogin () {
  const loader = document.querySelector('.loader')
  loader.className = 'loader'
  window.chrome.runtime.sendMessage('login', (response) => {
    if (response === 'Success') {
      loader.className += ' hidden'
      window.location.assign('instructions.html')
    }
    console.log(response)
  })
}
