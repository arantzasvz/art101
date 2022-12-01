// Author: Arantza (asvilchi@ucsc.edu), Patty (cpieper@ucsc.edu), Anika (amittal4@ucsc,edu)
// Created: 11/17/22
// License: Public Domain

function FizzBuzzBoom(){
  for (i=1; i <=200; i++) {
    var str ="";
    if (n%3 == 0) {
      str += "Fizz";
    }
    else if (n%5 == 0){
        str += ("Buzz");
    }
    else if (n%7 == 0){
      str += "Boom";
    }

    if (str == ""){
      str = n;
    }
    $("#output").append("<p>" + st +r + "</p>");
  }
}

$(".press").click(FizzBuzzBoom)
