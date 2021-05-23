window.onload = function () {
  // window.localStorage.clear()
  if (window.localStorage.getItem('uid') !== null) {
    window.location.assign('instructions.html')
  }
}

document.querySelector('.login').addEventListener('click', googleLogin)
function googleLogin () {
  chrome.runtime.sendMessage('login', (response) => {
    console.log(response)
    window.location.assign('instructions.html')
  })
}