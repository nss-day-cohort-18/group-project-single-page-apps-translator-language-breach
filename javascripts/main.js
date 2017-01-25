"use strict";

//Creating our original Sandwich IIFE
var Languages = (function() {

    // var languageSentence = function(languageSet) {
    //     var myLanguage = "";
    //     languageSet.forEach(function(key) {
    //         myLanguage += languageSet[key] + " ";
    //         if (key === myLanguage.length) {
    //             myLanguage += ".";
    //         }
    //         return myLanguage;
    //     });
    // };

    return {
        getFrench: function() {
            outputField.innerHTML = languageSentence(frenchWords);
            return outputField;
        },
        getSpanish: function() {
            outputField.innerHTML = languageSentence(spanishWords);
            return outputField;
        },
        getGerman: function() {
            outputField.innerHTML = languageSentence(germanWords);
            return outputField;
        },
        getPortuguese: function() {
            outputField.innerHTML = languageSentence(portugueseWords);
            return outputField;
        }
    };
})();


//grabbing each option element
var frenchSelect = document.getElementById("french");
var spanishSelect = document.getElementById("spanish");
var germanSelect = document.getElementById("german");
var portugueseSelect = document.getElementById("portuguese");

//establishing userInput as they type through keyup
var userInput = "";

//grabbing input and output fields
var inputField = document.getElementsByTagName("input")[0];
var outputField = document.getElementById("output");


//adding event Listseners to each language option 
spanishSelect.addEventListener("change", Languages.getSpanish);
frenchSelect.addEventListener("change", Languages.getFrench);
germanSelect.addEventListener("change", Languages.getGerman);
portugueseSelect.addEventListener("change", Languages.getPortuegese);

//adding event listsner to input, updates the userInput on change
// inputField.addeventListener("change", updateInput);