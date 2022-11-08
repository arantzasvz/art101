/*
 * Author: Arantza and Patty
 * Created: 11/7/22
 */
 main();
var buttonEl = document.getElementById("mybutton");
buttonEl.addEventListener("click", function(){
  var name = document.getElementById("form-field").value;
  var nameEl = document.getElementById("name");
  nameEl.innerHTML = name;

})
