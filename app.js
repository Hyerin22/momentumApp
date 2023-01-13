const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

// Getting  users' info and greetings
function onLoginSubmit(event){
  // stop the default behaviour of browser
  event.preventDefault();
  // hide the form
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // save value
  const username = loginInput.value;

  // Save user's info into the local storage
  localStorage.setItem(USERNAME_KEY, username);

  paintGreetings(username);
} 

// remember the username
function paintGreetings(username){
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}


// after saving local storage
// if user refresh the browser, it can still remember username
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  paintGreetings(savedUsername);
}