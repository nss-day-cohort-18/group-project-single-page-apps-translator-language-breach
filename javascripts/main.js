"use strict";
//grabbing input and output fields with submit button
var inputField = document.getElementById("userText");
var outputField = document.getElementById("output");
//Translate Button
var submitButton = document.getElementById("submitButton");
//User text input
var textInput = "";
//option fields
var select1 = document.getElementById("selectField1");
var select2 = document.getElementById("selectField2");

//what option field is set to
var value1 = select1.options[select1.selectedIndex].value;
var value2 = select2.options[select2.selectedIndex].value;


//Creating our original Sandwich IIFE
var Languages = (function() {

    return {
        fullTranslate: function(text) {
            if (value2 === "spanish") {
                output.innerHTML = Languages.setSpanish(text);
            } else if (value2 === "french") {
                output.innerHTML = Languages.setFrench(text);                          
            } else if (value2 === "portuguese") {
                output.innerHTML = Languages.setPortuguese(text);
            } else if (value2 === "german") {
                output.innerHTML = Languages.setGerman(text);
            } 
        }
    };
})();


//updating textInut value as change
inputField.addEventListener("change", function(){
    textInput = inputField.value;
});

//updating the select option's values as it changes
select1.addEventListener("change", function() {
    value1 = select1.options[select1.selectedIndex].value;
    return value1;
});
select2.addEventListener("change", function() {
    value2 = select2.options[select2.selectedIndex].value;
    return value2;
});

submitButton.addEventListener("click", function() {
    if (textInput === "") {
        alert("Please input a value.")
    } else if (value1 === "english") {
        Languages.fullTranslate(textInput);
    } else if (value1 === "spanish") {
        Languages.fullTranslate(Languages.getSpanishName(textInput));       
    } else if (value1 === "french") {
        Languages.fullTranslate(Languages.getFrenchName(textInput));
    } else if (value1 === "portuguese") {
        Languages.fullTranslate(Languages.getPortugueseName(textInput));
    } else if (value1 === "german") {
        Languages.fullTranslate(Languages.getGermanName(textInput));       
    };
});











