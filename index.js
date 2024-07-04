var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;

var randomDice1="./images/dice"+randomNumber1+".png";

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDice1);

// second dice
var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2)+1;

var randomDice2="./images/dice"+randomNumber2+".png";

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDice2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="🚩Play 1 Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent="Play 2 Wins!🚩";
}
else{
    document.querySelector("h1").textContent="Draw!";
}