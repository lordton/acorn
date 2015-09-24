$( document ).ready(function() {
    $("#gyro2").text( "JS ok." );
    console.log("yesp")



  $('video').mediaelementplayer({
    alwaysShowControls: true,
    videoVolume: 'horizontal',
    features: ['playpause','progress','volume','fullscreen']
  });

$('video')[0].player.play();



  });


window.ondeviceorientation = function(event) {
  alpha = Math.round(event.alpha*10);
  beta = Math.round(event.beta*10);
  gamma = Math.round(event.gamma*10);
$("#gyro1").text("alpha "+alpha);

//почасовой против
if (beta > 100 ){
  $("#gyro2").text("beta "+"против часовой "+beta);
  $('video')[0].player.pause();
}
if (beta < -100) {
  $("#gyro2").text("beta "+"по часовой "+beta);
  $('video')[0].player.pause();
}
if (beta >= -100 && beta <=100 && gamma >= -700 && gamma <= -500 ) {
  $("#gyro2").text("beta "+"OK "+beta);
  $("#gyro3").text("gamma "+"ОК "+gamma);
  $('video')[0].player.play();
}

//наклон вперед назад
if (gamma > -500) {
  $("#gyro3").text("gamma "+"на себя "+gamma);
  $('video')[0].player.pause();
}
if (gamma < -700) {
  $("#gyro3").text("gamma "+"от себя "+gamma);
  $('video')[0].player.pause();
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



