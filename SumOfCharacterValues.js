// Get sum of characters based on CHEIRO's alphabet value

function getSum(textval) {
  
  var ad = {};
  ad["a"] = 1;
  ad["b"] = 2;
  ad["c"] = 3;
  ad["d"] = 4;
  ad["e"] = 5;
  
  ad["f"] = 8;
  ad["g"] = 3;
  ad["h"] = 5;
  ad["i"] = 1;
  ad["j"] = 1;
  
  ad["k"] = 2;
  ad["l"] = 3;
  ad["m"] = 4;
  ad["n"] = 5;
  ad["o"] = 7;
  
  ad["p"] = 8;
  ad["q"] = 1;
  ad["r"] = 2;
  ad["s"] = 3;
  ad["t"] = 4;
  
  ad["u"] = 6;
  ad["v"] = 6;
  ad["w"] = 6;
  ad["x"] = 5;
  ad["y"] = 1;
  
  ad["z"] = 7;
  ad[" "] = 0
  
  ad["1"] = 1;
  ad["2"] = 2;
  ad["3"] = 3;
  ad["4"] = 4;
  ad["5"] = 5;
  
  ad["6"] = 6;
  ad["7"] = 7;
  ad["8"] = 8;
  ad["9"] = 9;
  ad["0"] = 0;
  
  var sum = 0;
  for (i = 0; i < textval.length; i++) {
    sum += ad[textval[i].toLowerCase()];
  }
  
  while(sum >= 10) {
    sum = sumDigits(sum);
  }
  
  return sum;
  
}

function sumDigits(number) {
  var sum = 0;
  while(number) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  
  return sum;
}
