/*
 * palindrode
 * https://github.com/sodper/palindrode
 *
 * Copyright (c) 2013 Per Flitig
 * Licensed under the MIT license.
 */

'use strict';

exports.test = function(string) {
  var relevantCharacters,
      filteredString,
      reversedString;

  if (typeof string !== 'string') {
    return false;
  }

  relevantCharacters = string.match(/[a-z0-9]/gi);

  if (relevantCharacters === null) {
    return false;
  }

  filteredString = relevantCharacters.join('').toLowerCase();
  reversedString = filteredString.split('').reverse().join('');
  return filteredString.length > 0 && filteredString === reversedString;
};
