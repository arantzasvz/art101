/*
 * Author:    Patty and Arantza
 * Created:   10.28.2022
 * (c) Copyright by Blub Corp.
 */

window.onload = function () {
  var outputEl = document.getElementById("output");
  console.log("outputEl: ", outputEl);
  var new1El = document.createElement("p");
  new1El.innerHTML = "Hi its Patty and Arantza";
  new1El.id = "new-one";
  var new2El = document.createElement("P");
  new2El.id = "new-two";
  new2El.innerHTML = "This is our Lab 9";
  outputEl.appendChild(new1El);
  outputEl.appendChild(new2El);
}
