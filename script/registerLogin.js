document.addEventListener('DOMContentLoaded', () => {
  
  let registerAndLogin = document.querySelectorAll('.registerAndLogin')
  let registerWindow = document.querySelector('.registerWindow')
  let loginWindow = document.querySelector('.loginWindow')
  let closeRegister = document.querySelector('.closeRegister')
  let closeLogin = document.querySelector('.closeLogin')


  registerAndLogin[0].onclick = () => {
    registerWindow.style.display = 'flex'
  }

  closeRegister.onclick = () => {
    registerWindow.style.display = 'none'
  }

  registerAndLogin[2].onclick = () => {
    loginWindow.style.display = 'flex'
  }

  closeLogin.onclick = () => {
    loginWindow.style.display = 'none'
  }

  
})