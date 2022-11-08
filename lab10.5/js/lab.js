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
// Thanks to https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// sortUserName - a function that takes user input and sorts the letters
// of their name
main2();
function reorderUserName(word) {
    var wordArray = word.toLowerCase().split('');
    var newArray = shuffleArray(wordArray);
    return newArray.join('');
}

// given a string, return string in Title Case
// thanks to https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

// find the button element
buttonElAna = document.getElementById("my-button-ana");
// find the form element
inputElAna = document.getElementById("user-name-ana");
// find output element
outputElAna = document.getElementById("output-ana");

// add an event listener to button
buttonElAna.addEventListener("click", function(){
  // get value from name element
  var userName = inputElAna.value;
  // modify value - either sort or shuffle
  var newName = toTitleCase(reorderUserName(userName));
  // put value in output element
  outputElAna.innerHTML = "<p id=name-results>" + newName + "</p>";
      }
  );

function main() {
    var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
    document.writeln("<style>:root {--textlen: " + userName.length + ";}</style>");
    var sortedName = sortUserName(userName);
    document.writeln("Here's your sorted name: " + sortedName + "</br></br>");
    var randomName = randomizeName(userName);
    document.writeln("And oh hey, I fixed your name.<br>Your new one is above.");
    document.writeln("<div class='name'>" + randomName + "</div>")
}

// call the function
main2();
