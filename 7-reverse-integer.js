var checkRange = function (num) {
  if(num > -2147483648 && num < 2147483647) return num;
  return 0;
}
var reverse = function (x) {
  let negative = false;
  if (x === 0) return 0;
  if (x < 0) negative = true;
  absX = Math.abs(x)
  absX = absX.toString().split('').reverse().join('')
  if (negative) return checkRange(Number(absX * -1))
  else return checkRange(Number(absX));
};

console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(543))
console.log(reverse(0))
console.log(reverse(120))
