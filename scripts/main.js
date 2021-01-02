//const myHeading = document.querySelector("h1");
//myHeading.textContent = "Hello World!";

let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mysrc = myImage.getAttribute('src');
    if (mysrc == 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2.jpg');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png')
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector('h1');
function setUserName(){
    let myName = prompt('Please enter your name:');
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozila is cool, '+ myName;
    }
    
}

if (!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozila is cool, '+ storedName;
}

myButton.onclick = function(){
    setUserName();
}