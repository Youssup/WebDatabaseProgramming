class User {
  constructor(firstName, lastName, username, password) {
    this.firstName = firstName
    this.lastName = lastName
    this.username = username
    this.password = password
  }
}

function loginUser(event) {
  event.preventDefault()
  const username = document.getElementById('username').value
  const password = document.getElementById('password').value
  const newUser = new User(null, null, username, password)
  console.log(newUser)
}

const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', loginUser);
}
function registerUser(event) {
  event.preventDefault()
  const firstName = document.getElementById('firstName').value
  const lastName = document.getElementById('lastName').value
  const username = document.getElementById('username').value
  const password = document.getElementById('password').value
  const newUser = new User(firstName, lastName, username, password)
  console.log(newUser)
}

const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', registerUser);
}