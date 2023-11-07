let randomNum1=Math.floor(Math.random()*6)+1;
let randomNum2=Math.floor(Math.random()*6)+1;

let rd1=document.querySelectorAll("img")[0];
let rd2=document.querySelectorAll("img")[1];

let imgs1="../images/dice"+randomNum1+".png";
let imgs2="../images/dice"+randomNum2+".png";
if(randomNum1>randomNum2){
    document.querySelector("h3").innerHTML="Player 1 wins";

}else if(randomNum1===randomNum2){
    document.querySelector("h3").innerHTML="Draw";
}else{
    document.querySelector("h3").innerHTML="Player 2 wins";
}
document.querySelectorAll("img")[0].setAttribute("src",imgs1);
document.querySelectorAll("img")[1].setAttribute("src",imgs2);










