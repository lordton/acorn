$( document ).ready(function() {
    $("#gyro2").text( "JS ok." );
    console.log("yesp");


  $('video').mediaelementplayer({
    alwaysShowControls: true,
    videoVolume: 'horizontal',
    features: ['playpause','progress','volume','fullscreen']
  });

$('video')[0].player.play();
$('video')[0].player.pause();




//переменная level  включает/выключает трекинг по гироскопу
var level = 0; 
console.log("level111111111111111111 "+level);


//переменная restcounter считает "тряску" и "покой" устройства
var restcounter = 0;
//текстовое отображение переменной restcounter
var restcountertext = "счетчик";

//функция  resetter перезагружает restcounter при достижении 300
function resetter(){
restcounter = 0;
acc_sensor = "good";
onoff();
}


//функция onoff контролирует включение выключение видео относительно того что скажут датчики
//gyro_sensor отслеживает наклон
//acc_sensor  отслеживает ускорение
function onoff(){
  if (level == 1) {
    $("#gyro4").text(gyro_sensor+" "+acc_sensor);
    if (gyro_sensor=="bad" || acc_sensor=="bad"){ //
      $('video')[0].player.pause();
      $('#modal1').show();
    } else {
      $('#modal1').hide();
      $('video')[0].player.play();
    }
  } else {
    $('video')[0].player.pause();
  }
}

//кнопка включает видео в самые первый раз
$( "#button1" ).click(function() {     
    console.log("click");
    level = 1;
    gyro_sensor="good";
    acc_sensor="good";
    $( "#button1" ).hide();
    onoff();
    });


//все что происходит по гироскопу те фактически всегда
window.ondeviceorientation = function(event) {
  alpha = Math.round(event.alpha*10);
  beta = Math.round(event.beta*10);
  gamma = Math.round(event.gamma*10);
$("#gyro1").text("alpha "+alpha);


//отслеживание наклона по часовой или против (сенсор beta)
if (beta > 100 && level == 1) {
    $("#gyro2").text("beta " + "против часовой " + beta);
    $('video')[0].player.pause();
    gyro_sensor = "bad";
    $("#text1").text("Верните телефон в правильное положение (Против часовой стрелки)");
    onoff();
}
if (beta < -100 && level == 1) {
    $("#gyro2").text("beta " + "по часовой " + beta);
    gyro_sensor = "bad";
    $("#text1").text("Верните телефон в правильное положение (По часовой стрелке)");
    onoff();
}
if (beta >= -100 && beta <= 100 && gamma >= -700 && gamma <= -500 && level == 1) {
    $("#gyro2").text("beta " + "OK " + beta);
    $("#gyro3").text("gamma " + "ОК " + gamma);
    gyro_sensor = "good";
    onoff();

}

//отслеживание наклона вперед назад (сенсор gamma)
if (gamma > -500 && level == 1) {
    $("#gyro3").text("gamma " + "на себя " + gamma);
    gyro_sensor = "bad"
    $("#text1").text("Верните телефон в правильное положение (На себя)");
    onoff()
}
if (gamma < -700 && level == 1) {
    $("#gyro3").text("gamma " + "от себя " + gamma);
    gyro_sensor = "bad"
    $("#text1").text("Верните телефон в правильное положение (От себя)");
    onoff();
}


}


//все что происходит по ускорению те фактически всегда
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




if (rest <= 65){
  restcounter = restcounter +1; 
};
if (rest > 65 && rest <= 150){
  restcounter = restcounter -2; 
};
if (rest > 150 && rest <= 400){
  restcounter = restcounter -3; 
};
if (rest > 400 && rest <= 1000){
  restcounter = restcounter + 5; 
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

if (restcounter>=300 && restcounter<400){
  restcountertext="плохо";
  $("#text1").text("Пожалуйста держите телефон в руках, не тряся им");
  restcounter=401;
  acc_sensor = "bad";
  onoff();
};

if (restcounter>400){
setTimeout(resetter, 3000);
};


  if (rotation != null) {
    arAlpha = Math.round(rotation.alpha);
    arBeta = Math.round(rotation.beta);
    arGamma = Math.round(rotation.gamma);

  }
}

  });


