$( document ).ready(function() {
    $("#gyro2").text( "JS ok." );
    console.log("yesp");

  $('video').mediaelementplayer({
    alwaysShowControls: true,
    videoVolume: 'horizontal',
    features: ['playpause','progress','volume','fullscreen']
  });

var level = 0;
var restcounter = 0;
var restcountertext = "счетчик";
console.log("level111111111111111111 "+level);

$( "#button1" ).click(function() {     
    $('#modal1').hide();
    console.log("click");
    $('video')[0].player.play();
    level = 1;
    });


window.ondeviceorientation = function(event) {
  alpha = Math.round(event.alpha*10);
  beta = Math.round(event.beta*10);
  gamma = Math.round(event.gamma*10);
$("#gyro1").text("alpha "+alpha);


//почасовой против
if (beta > 100 && level == 1){
  $("#gyro2").text("beta "+"против часовой "+beta);
  $('video')[0].player.pause();
  $('#modal1').show();
  $("#text1").text( "Верните телефон в правильное положение (Против часовой стрелки)" );
}
if (beta < -100 && level == 1) {
  $("#gyro2").text("beta "+"по часовой "+beta);
  $('video')[0].player.pause();
  $('#modal1').show();
  $("#text1").text( "Верните телефон в правильное положение (По часовой стрелке)" );
}
if (beta >= -100 && beta <=100 && gamma >= -700 && gamma <= -500 && level == 1 ) {
  $("#gyro2").text("beta "+"OK "+beta);
  $("#gyro3").text("gamma "+"ОК "+gamma);
  $('video')[0].player.play();
  $('#modal1').hide();

}

//наклон вперед назад
if (gamma > -500 && level == 1) {
  $("#gyro3").text("gamma "+"на себя "+gamma);
  $('video')[0].player.pause();
  $('#modal1').show();
  $("#text1").text( "Верните телефон в правильное положение (На себя)" );
}
if (gamma < -700 && level == 1) {
  $("#gyro3").text("gamma "+"от себя "+gamma);
  $('video')[0].player.pause();
  $('#modal1').show();
  $("#text1").text( "Верните телефон в правильное положение (От себя)" );
}


}

window.ondevicemotion = function(event) {
  ax = event.accelerationIncludingGravity.x
  ay = event.accelerationIncludingGravity.y
  az = event.accelerationIncludingGravity.z
  bx = event.acceleration.x
  by = event.acceleration.y
  bz = event.acceleration.z
  rotation = event.rotationRate;
  rest = (Math.abs(Math.round(bx*1000))+Math.abs(Math.round(by*1000))+Math.abs(Math.round(bz*1000)))/3
$("#gyro4").text("ax "+Math.round(ax*10));
$("#gyro5").text("ay "+Math.round(ay*10));
$("#gyro6").text("az "+Math.round(az*10));

//console.log("ax "+Math.round(ax*1000)+";ay "+Math.round(ay*1000)+";az "+Math.round(az*1000)+";bx "+Math.round(bx*1000)+";by "+Math.round(by*1000)+";bz "+Math.round(bz*1000))
console.log(rest);
$("#gyro7").text(restcountertext);




if (rest <= 70){
  restcounter = restcounter +1; 
};
if (rest > 70 && rest <= 150){
  restcounter = restcounter -1; 
};
if (rest > 150 && rest <= 400){
  restcounter = restcounter -3; 
};
if (rest > 400 && rest <= 1000){
  restcounter = restcounter + 10; 
};

if (rest > 1000 && rest <= 2000){
  restcounter = restcounter + 100; 
};


if (restcounter<=0){
  restcounter=0
};

if (restcounter>0 && restcounter<300){
  restcountertext=restcounter
};

if (restcounter>=300){
  restcountertext="плохо"
};

if (restcounter>=400){
  restcounter=0
};

  if (rotation != null) {
    arAlpha = Math.round(rotation.alpha);
    arBeta = Math.round(rotation.beta);
    arGamma = Math.round(rotation.gamma);

  }
}

  });


