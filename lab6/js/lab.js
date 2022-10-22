/*
 * Author: Arantza and Patty
 * Created: 22 October
 */

// Define Variables
myTransport = [ "bus", "walking", "roommates car", "boyfriends car"];

myMainRide = {
    make: "Honda",
    model : "CRV",
    color : "Black",
    year : 2000,
    age : function() {
        return 2022 - age;
    }
}

// output
document.writeln("Not My Wheels: ", myTransport, "</br>");
document.writeln("Patty's car: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
