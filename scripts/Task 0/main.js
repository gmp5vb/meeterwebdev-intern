var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello World!';

// document.querySelector('html').onclick = function(){
// 	alert("click");

var myImage = document.querySelector('img');
var myButton = document.querySelector('button');

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/zombieFloryan.png'){
		myImage.setAttribute('src','images/floryan.png');
	}
	else{
		myImage.setAttribute('src','images/zombieFloryan.png');
	}
}

// function setUserName(){
// 	var myName = prompt('Please enter your name.');
// 	localStorage.setItem('name', myName);
// 	myHeading.textContent = 'Hello, ' + myName;
// }

// myButton.onclick = function(){
// 	setUserName();
// }


// if(!localStorage.getItem('name')){
// 	setUserName();
// }
// else{
// 	var storedName = localStorage.getItem('name');
// 	myHeading.textContent = 'Hello, ' + storedName;
// }

