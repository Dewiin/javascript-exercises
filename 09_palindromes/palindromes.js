const palindromes = function (string) {
  string = string.toLowerCase().replace(/[^a-z0-9]/gi,'');

  let i = 0;
  let j = string.length-1;

  while(i <= j) {
    if(string.charAt(i) !== string.charAt(j)) {
      return false;
    }
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
