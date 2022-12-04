/*
 * Author: Arantza and Patty
 * Created: 25 October
 */

 var numArray = [10, 20, 30, 40, 50];

 function numTens(x) {
     return (x * 10)
 }
 console.log("1 * 10 is: ", numTens(1));
 console.log("2 * 10 is: ", numTens(2));
 console.log("3 * 10 is: ", numTens(3));

 var result = numArray.map(numTens);
   console.log("Test of numTens of array: ", result);

 var result = numArray.map(function(x){
     return (x * 10);
 })
  function isEven(x) {
    return (x % 2 == 0);
  }
  console.log ("Is one even?", isEven(1));
  console.log ("Is two even?", isEven(2));
  console.log ("Is three even?", isEven(3));
  console.log ("Is four even?", isEven(4));
  console.log ("Is five even?", isEven(5));
    console.log("Test of anonymous function of array: ", result);
   var result = numArray.map (numTens);
   console.log ("Test if true or false:",result);
