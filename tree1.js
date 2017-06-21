    var speech = document.getElementById("speech");
var score=0;
var lives=3;
var track;
var item;
var thing=document.getElementById("item");
var earth = document.getElementById("earth");

earth.addEventListener('click', function() {
  speech.innerHTML = "Save me now by recycling!";
});
function begin(){

document.getElementById("start_instructions").style.display="none";
document.getElementById("recycling_bins").style.display="inline";
document.getElementById('timer').innerHTML =
  03 + ":" + 00;
startTimer();


choose();
}
function check(){

if(track==item){
score+=1;
update();
}else{
life();

}

}

function cans(){
track=1;


}
function plastic(){
track=3;
}
function paper(){
track=2;
}

function choose(){
var a=Math.floor(Math.random() * 10);
if (a==0) {
thing.innerHTML="<img id='thing1' src='images/brochure.png' />"
paper();
}else if(a==1){
thing.innerHTML="<img id='thing1' src='images/Alumi_can.png' />"
cans();
}else if(a==2){
thing.innerHTML="<img id='thing1' src='images/water.png' />"
plastic();
}else if(a==3){
thing.innerHTML="<img id='thing1' src='images/Milk.png' />"
plastic();
}else if(a==4){
thing.innerHTML="<img id='thing1' src='images/lays.png' />"
plastic();
}else if(a==5){
thing.innerHTML="<img id='thing1' src='images/c.png' />"
paper();
}else if(a==6){
thing.innerHTML="<img id='thing1' src='images/bottle1.png' />"
plastic();
}else if(a==7){
thing.innerHTML="<img id='thing1' src='images/newspaper.png' />"
paper();
}else if(a==8){

thing.innerHTML="<img id='thing1' src='images/tincan.png' />"
cans();
}else if(a==9){

thing.innerHTML="<img id='thing1' src='images/soupcan.png' />"
cans();

}
}
function life(){
lives--;
if(lives==2){
document.getElementById("life1").style.display="none";

choose();
}else if(lives==1){
document.getElementById("life2").style.display="none";

choose();
}else{
document.getElementById("life3").style.display="none";
gameover();

}


}

function gameover(){
document.body.innerHTML="<h1>Gameover!</h1> <br/> <h2>Your score is "+score+"</h2>"
    cancelInterval(timer);
}
function update(){

document.getElementById("scoreboard").innerHTML="Score:"+score;
choose();
}



function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  //if(m<0){alert('timer completed')}
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}