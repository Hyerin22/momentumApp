const clock = document.querySelector("#clock");

function getClock(){
  const date = new Date();

  // fill the string for time with two character
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock()        // show the clock immediately
setInterval(getClock, 1000);

