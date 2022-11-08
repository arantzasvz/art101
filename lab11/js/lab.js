// Author: Arantza (asvilchi@ucsc.edu) and Patty (cpieper@ucsc.edu)
// Created: 11/8/22
// License: Public Domain

let buttonNumber = 1;
function createButton(){
    $("#output-1").append(
        "<button class = 'creator-button' id = creator-button-"+buttonNumber.toString()
        +"> Create another button </button>");
    $('#creator-button-'
    +buttonNumber.toString()).click(createButton);
    buttonNumber++;
};

$('#creator-button-0').click(createButton);
