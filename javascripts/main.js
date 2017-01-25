"use strict";
//grabbing input and output fields with submit button
var inputField = document.getElementById("userText");
var outputField = document.getElementById("output");
//Translate Button
var submitButton = document.getElementById("submitButton");
//User text input
var textInput = "";
//option field
var select = document.getElementById("selectField");
//what option field is set to
var value = select.options[select.selectedIndex].value;;


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
select.addEventListener("change", function() {
    value = select.options[select.selectedIndex].value;
    return value;
});

submitButton.addEventListener("click", function() {
    if (textInput === "") {
        alert("Please input a value.")
    } else if (value === "spanish") {
        Languages.getSpanish(textInput);
    } else if (value === "french") {
        Languages.getFrench(textInput);                          
    } else if (value === "portuguese") {
        Languages.getPortuguese(textInput);
    } else if (value === "german") {
        Languages.getGerman(textInput);
    }
});











