let number = +prompt("Son kiriting:");
strnum = number.toString();
first = strnum.slice(0, 3);
second = strnum.slice(3, 6);

function sumOfDigits(num) {
  return num
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0);
}

a = sumOfDigits(first);
b = sumOfDigits(second);
if (a === b) {
  alert("YES");
} else {
  alert("NO");
}
