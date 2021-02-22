let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/IMG_20181215_122559.jpg') {
      myImage.setAttribute('src','images/2014-08-23 19.58.41.jpg');
    } else {
      myImage.setAttribute('src','images/IMG_20181215_122559.jpg');
    }
}

document.querySelector('h1').onclick = function() {
    alert('Ouch! Stop poking me!');
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
let myName = localStorage.getItem('name');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hello ' + myName + ', the boys want some pets';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello ' + myName + ', the boys want some pets';
}

myButton.onclick = function() {
    setUserName();
}
