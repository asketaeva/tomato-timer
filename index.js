var min;
var sec;
var ding;

function preload(){
  ding=loadSound("ding.mp3");
}

function start(x){
  clearInterval(interval)
  min =x;
  sec=10;

  var interval= setInterval(
    function(){
      var element = document.getElementById("timer")
      if(sec==0 && min==0){
        clearInterval(interval)
        element.innerHTML="00:00";
        ding.play();
      }

     else if(sec==0){
      min=min-1;
      sec=59;
      element.innerHTML=min + ":" + sec;
      document.title = min + ":" + sec;
    }
    else if(sec>0){
      sec=sec-1;
      element.innerHTML=min + ":" + sec;
      document.title = min + ":" + sec;
    }
  },
    1000)
}
