function displayClock(){
  var display = new Date().toLocaleTimeString();
  let i = document.getElementById("time").innerHTML = display;
  setTimeout(displayClock, 1000); 
}

displayClock();