$( document ).ready(function() {
//начало элементов управления видео
  $('video').mediaelementplayer({
    alwaysShowControls: true,
    videoVolume: 'horizontal',
    features: ['playpause','progress','volume','fullscreen']
  });
//конец элементов управления видео
  });

$('video')[0].player.play();

var i=1

$(function(){
setInterval(oneSecondFunction, 5000);
});

function oneSecondFunction() {
console.log("onesecond")
if (i == 0){
  $('video')[0].player.play();
};
if (i == 1){
$('video')[0].player.pause();
};
// stuff you want to do every second
}


window.ondeviceorientation = function(event) {
  alpha = Math.round(event.alpha*10);
  beta = Math.round(event.beta*10);
  gamma = Math.round(event.gamma*10);
$("#gyro1").text("alpha "+alpha);

//почасовой против



if (beta > 100 ){
  $("#gyro2").text("beta "+"против часовой "+beta);
  var i=0;
  console.log("paused because tilted right")
  $("#gyro7").text("i "+0);
  
}
if (beta < -100) {
  $("#gyro2").text("beta "+"по часовой "+beta);
  var i=0;
  console.log("paused because tilted left")
  $("#gyro7").text("i "+0);
  
}
if (beta >= -100 && beta <=100 ) {
  $("#gyro2").text("beta "+"OK "+beta);
  var i=1;
  $("#gyro7").text("i "+1);

  
}

//наклон вперед назад
if (gamma > -500) {
  $("#gyro3").text("gamma "+"на себя "+gamma);
}
if (gamma < -700) {
  $("#gyro3").text("gamma "+"от себя "+gamma);
}
if (gamma >= -700 && gamma <= -500 ) {
  $("#gyro3").text("gamma "+"ОК "+gamma);
}


}

window.ondevicemotion = function(event) {
  ax = event.accelerationIncludingGravity.x
  ay = event.accelerationIncludingGravity.y
  az = event.accelerationIncludingGravity.z
  rotation = event.rotationRate;
$("#gyro4").text("ax "+Math.round(ax*10));
$("#gyro5").text("ay "+Math.round(ay*10));
$("#gyro6 ").text("az "+Math.round(az*10));

  if (rotation != null) {
    arAlpha = Math.round(rotation.alpha);
    arBeta = Math.round(rotation.beta);
    arGamma = Math.round(rotation.gamma);

  }
}



