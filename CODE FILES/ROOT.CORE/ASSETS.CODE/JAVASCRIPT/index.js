function SearchTrigger() {
  var x = document.getElementById("SearchContainer");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
function readCommand() {
  let readInput = document.querySelector('#SearchInput-Text').value

  if (readInput === 'RUN') {
    alert ("You use RUN Command");  

  } else if (readInput === 'CLOSE') {
    alert ("You use CLOSE Command");

  } else {
    alert(`Not a command`);
  }
}

function AppLaunch7() {
  const path = require('path');
  nw.Shell.openItem(path.resolve('D:/SECURE DRIVE/SYSTEM CORE/SECURE CALC/SECURE CALC.exe'));
}