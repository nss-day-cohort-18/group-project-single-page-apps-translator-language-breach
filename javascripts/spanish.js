/*
 * @function Languages
 * @param  {Object} function (dictionary {Original dictionary Object}
 * @return {Object} {Adding Spanish dictionary to the original dictionary.}
 */
var Languages = (function(dictionary) {
  'use strict';
  var spanishWords = {
    merry: 'feliz',
    christmas: 'navidad',
    and: 'y',
    happy: 'prospero',
    new: 'nuevo',
    year: 'año'
  };
  dictionary.setSpanish = function(word) {
    return spanishWords[word];
  }
  dictionary.getSpanishName = function(word) {
    var valsArray = Object.values(spanishWords);
    var keysArray = Object.keys(spanishWords);
    for (var arrayNum = 0; arrayNum < valsArray.length; arrayNum++) {
      if (word === valsArray[arrayNum]) {
        return keysArray[arrayNum];
      }
    }
  };
  return dictionary;
}(Languages));