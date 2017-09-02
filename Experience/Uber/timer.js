/*
Timer - countdown: 5 4 3 2 1 0
*/

function counter(n){
  var timer = setInterval(function(){
    console.log(n);
    if(n === 0){
      clearInterval(timer);
    }
    n--;
  }, 1000);
}

n = 20;
counter(n);
