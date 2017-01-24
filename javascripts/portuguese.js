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

  return dictionary;

})(Languages);
