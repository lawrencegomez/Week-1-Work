function maxOfTwoNumbers(x,y) {
  if (x >= y) {
    return x;
  }
  else
    return y;
  }
console.log(maxOfTwoNumbers(13,52));


var maxOfThree = function(x,y,z) {
  if (x > y && x > z) {
    return x;
  }
  else if (y > x && y > z) {
    return y;
  }
  else
    return z;
}
console.log(maxOfThree(32,56,2));


function isCharAVowel(x) {
  if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u') {
    return !!x;
  }
  else
    return !x;
}
console.log(isCharAVowel('a'));


var sumArray = function(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i ++) {
    total += arr[i];
  } return total;
}
console.log(sumArray([1,2,3]))


function multiplyArray(arr) {
  var total = 1;
  for (var i = 0; i < arr.length; i ++) {
    total *= arr[i];
  } return total;
}
console.log(multiplyArray([2,4,10]))


var numArgs = function() {
  return arguments.length;
}
console.log(numArgs(1,2,3,4,5,3,1,3,5,3,2,1))



function reverseString(s) {
   var o = '';
   for (var i = s.length-1; i >= 0; i --)
   o += s[i];
return o
}
console.log(reverseString('hello'));
