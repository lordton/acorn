$( document ).ready(function() {
    $("#gyro2").text( "The DOM is now loaded and can be manipulated." );
    console.log("yesp")
  });


window.ondeviceorientation = function(event) {
  alpha = Math.round(event.alpha*10);
  beta = Math.round(event.beta*10);
  gamma = Math.round(event.gamma*10);
$("#gyro1").text("alpha "+alpha);

//почасовой против
if (beta > 100 ){
  $("#gyro2").text("beta "+"против часовой "+beta);
}
if (beta < -100) {
  $("#gyro2").text("beta "+"по часовой "+beta);
}
if (beta >= -100 && beta <=100 ) {
  $("#gyro2").text("beta "+"OK "+beta);
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


//перемещения

$(document).ready(function(){
    animateDiv();
    
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('.red').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.red').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });

$('.yellow').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });

    
};

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}



