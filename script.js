$( document ).ready(function() {
    $("#gyro2").text( "The DOM is now loaded and can be manipulated." );
    console.log("yesp")

  });




new MediaElement('player1', {
    // shows debug errors on screen
    enablePluginDebug: false,
    // remove or reorder to change plugin priority
    plugins: ['flash','silverlight'],
    // specify to force MediaElement to use a particular video or audio type
    type: '',
    // path to Flash and Silverlight plugins
    pluginPath: '/myjsfiles/',
    // name of flash file
    flashName: 'flashmediaelement.swf',
    // name of silverlight file
    silverlightName: 'silverlightmediaelement.xap',
    // default if the <video width> is not specified
    defaultVideoWidth: 1000,
    // default if the <video height> is not specified     
    defaultVideoHeight: 270,
    // overrides <video width>
    pluginWidth: -1,
    // overrides <video height>       
    pluginHeight: -1,
    // rate in milliseconds for Flash and Silverlight to fire the timeupdate event
    // larger number is less accurate, but less strain on plugin->JavaScript bridge
    timerRate: 250,
    // method that fires when the Flash or Silverlight object is ready
    success: function (mediaElement, domObject) { 
         
        // add event listener
        mediaElement.addEventListener('timeupdate', function(e) {
             
            document.getElementById('current-time').innerHTML = mediaElement.currentTime;
             
        }, false);
         
        // call the play method
        mediaElement.play();
         
    },
    // fires when a problem is detected
    error: function () { 
     
    }
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



