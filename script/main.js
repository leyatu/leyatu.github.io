// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';
//点击事件
// document.querySelector('html').onclick = function() {
//     alert('别戳我，我怕疼。');
// }

//点击图片切换
let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc == 'img/伟大的工人阶级.png'){
        myImage.setAttribute('src','img/兔兔.jpeg');
    }else{
        myImage.setAttribute('src','img/伟大的工人阶级.png')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('please input your name');
    if(myName == null || !myName){
        setUserName()
    }
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Mozilla 酷毙了，'+ myName;
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，'+ storedName;
}

myButton.onclick = function(){
    setUserName();
}

