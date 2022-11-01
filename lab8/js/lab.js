/*
 * Author: Arantza and Patty
 * Created: 25 October
 */

function multiple10 (x) {
                 return (x + 10 == 20);
}
 //test function
 console.log("is it 10?", multiple10(10));
 console.log("is it 20", multiple10(20));

 array = [10, 20, 30, 40, 50, 60, 70, 80 ,90, 100]
 console.log ("My array", tens);

 var result = array.map (tens) ;
 //should return [true, false, false, false, false, false, false, false, false, false]
 console.log("Test of 10s:" result)

 multiple10.map (function(x) {
        return x + 20;
})
//should return [30, 40, 50, 60, 70, 80, 90, 100, 110]
console.log ("multiple of 10",result);
