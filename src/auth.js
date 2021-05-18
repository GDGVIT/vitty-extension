document.querySelector('.login').addEventListener('click', googleLogin)
function googleLogin () {
  chrome.runtime.sendMessage('login', (response) => {
      console.log(response)
    if (response === false) {
      window.location.assign('instructions.html')
    } else {
      console.log('exists')
    }
  })
}
