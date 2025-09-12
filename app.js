//ИГРА В УГАДАЙ ЧИСЛО//
//let range=document.getElementById("range");
const submit=document.getElementById("SubmitBtn");
const reset=document.getElementById("ResetBtn");
let output=document.getElementById("number-output-text");
let userNum=document.getElementById("number-input");
let indication=document.querySelector(".indication");
let darkTheme=document.getElementById("dark")

const maxCount=100;
const randNum=Math.floor(Math.random()*maxCount)+1;
console.log(randNum);
let outputMessage;
let temp="String";
let winNum=false;
console.log(range);

function range() {
  let rangeValue=document.getElementById("range").value;
  rangeValue=Number(range) + '%';
    document.querySelector(".indication").style.background = `linear-gradient(to top, red, ${range}, blue)`; 
  console.log(range);
}

/*range.eventCallback=function (){
  let range=document.getElementById("range").value;
  range=Number(range) + '%';
  document.querySelector(".indication").style.background = `linear-gradient(to top, red, ${range}, blue)`; 
  console.log(range);
}*/


submit.onclick=function () {

let userNum=document.getElementById("number-input");
userNum=userNum.value;
userNum=Number(userNum)
console.log(userNum);
console.log("Разность между нынешним",Math.abs(userNum-randNum));
console.log("Разность между предыдущим",Math.abs(temp-randNum));
console.log("temp",temp);
delta=Math.abs(userNum-randNum);
if (userNum===randNum){
    winNum=true
    outputMessage="Ты угадал!!"
}   else if(Math.abs(userNum-randNum)<3){
    outputMessage="Очень горячо"
    winNum=false
} else if(userNum<randNum && Math.abs(userNum-randNum)<Math.abs(temp-randNum)){
    outputMessage="Горячее"
    winNum=false
} 
  else if(userNum>randNum && Math.abs(userNum-randNum)<Math.abs(temp-randNum)){
    outputMessage="Горячее"
    winNum=false
} else if(Math.abs(userNum-randNum)<Math.abs(temp-randNum)){
    outputMessage="Горячее"
    winNum=false
} 
  else if(Math.abs(userNum-randNum)>Math.abs(temp-randNum)){
    outputMessage="Холоднее"
    winNum=false
} 
  else if(Math.abs(userNum-randNum)===Math.abs(temp-randNum)){
    outputMessage="Ни холдно, ни жарко"
    winNum=false
} 
   else{
    winNum=false
    outputMessage="Ты не угадал, попробуй еще раз"
};
temp=userNum;
console.log(temp, typeof(temp));
console.log(outputMessage);
console.log(delta);
let gradientLevel=(100-delta) + '%';
console.log(gradientLevel);


  document.querySelector(".indication").style.background = `linear-gradient(to top, red, ${gradientLevel}, blue)`;  
  

console.log(indication.style.background);
output.innerHTML=outputMessage;
}

reset.onclick = function () {
  window.location.reload()
}

darkTheme.onclick = function () {
  document.querySelector("body").style.backgroundColor="black";
  document.querySelector("#number-output").style.color="white";
  document.querySelector("#number-input-text").style.color="black";
  document.querySelector(".number").style.color="white";
  document.querySelector(".number-input").style.backgroundColor="red";
}
console.log(outputMessage);
