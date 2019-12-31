//select all html elements
const bodyBcg = document.querySelector('body');
const hexBtn = document.querySelector('.hexBtn');
const hexText = document.querySelector('.hexText');
//Do you need an array
const hexNumber = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
//Event Handler and function
hexBtn.addEventListener('click', getHex);
//function Do you need a loop, will anything need to be passed into function
function getHex(){
//assign output variable
    let hexValue= '#';
    for(i=0;i<6;i++){ //grabs 6 numbers from the array
        let randomNumber= Math.floor(Math.random()*hexNumber.length); //random number less than 16
        hexValue+=hexNumber[randomNumber];
    }
    bodyBcg.style.backgroundColor = hexValue;
    hexText.innerHTML= hexValue;
    console.log(hexValue);
};



