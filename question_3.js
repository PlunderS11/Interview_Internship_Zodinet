// Question 3

function sumBetweenNumbers(first, last) {
  var sum = 0;
  for (var i = first; i <= last; i++) {
    sum += i;
  }
  return sum;
}

function doubleSumByCondition(first, last, condition) {
  var result = sumBetweenNumbers(first, last);
  if (condition == true) {
    result = result * 2;
  }
  return result;
}
