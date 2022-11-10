// Author: Arantza (asvilchi@ucsc.edu) and Patty (cpieper@ucsc.edu)
// Created: 11/8/22
// License: Public Domain
// house sort function

function SortingHat(name) {
  var length = name.length;
  var mod = length % 4;
  if (mod == 0) {
  	var house = "Griffindor"
  } else if (mod == 1) {
  	var house = "Ravenclaw"
  } else if (mod == 2) {
  	var house = "Slytherin"
  } else {
  	var house = "Hufflepuff"
  }
  return house;
}

$("#sort").click(function(){
  var name = $("#name").val();
  console.log("name:", name);
  var houseStr = SortingHat(name);
  console.log("house:",houseStr);
	$("#output").html("Your house is " + houseStr);
})
