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
        getFrench: function(text) {
            outputField.innerHTML = Languages.setFrench(text.toLowerCase());
            return outputField;
        },
        getSpanish: function(text) {
            outputField.innerHTML = Languages.setSpanish(text.toLowerCase());
            return outputField;
        },
        getGerman: function(text) {
            outputField.innerHTML = Languages.setGerman(text.toLowerCase());
            return outputField;
        },
        getPortuguese: function(text) {
            outputField.innerHTML = Languages.setPortuguese(text.toLowerCase());
            return outputField;
        }
    };
})();


//updating textInut value as change
inputField.addEventListener("change", function(){
    textInput = inputField.value;
});

//updating the select option value as it changes
select1.addEventListener("change", function() {
    value1 = select1.options[select1.selectedIndex].value;
    return value1;
});

submitButton.addEventListener("click", function() {
    if (textInput === "") {
        alert("Please input a value.")
    } else if (value1 === "spanish") {
        Languages.getSpanish(textInput);
    } else if (value1 === "french") {
        Languages.getFrench(textInput);                          
    } else if (value1 === "portuguese") {
        Languages.getPortuguese(textInput);
    } else if (value1 === "german") {
        Languages.getGerman(textInput);
    }
});











