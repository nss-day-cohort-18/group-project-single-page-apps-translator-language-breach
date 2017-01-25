"use strict";

var Languages = (function(dictionary){

  var portugueseWords = {
    merry: "feliz",
    christmas: "natal",
    and: "e",
    happy: "Próspero",
    new: "novo",
    year: "ano"
  };

  dictionary.setPortuguese = function(word){
    return portugueseWords[word];
  };
  dictionary.getPortuguese = function(word) {
    var valsArray = Object.values(portugueseWords);
    var keysArray = Object.keys(portugueseWords);
    for (var arrayNum = 0; arrayNum < valsArray.length; arrayNum++) {
      if (word === valsArray[arrayNum]) {
        return keysArray[arrayNum];
      }
    }
  };

  return dictionary;

})(Languages);
