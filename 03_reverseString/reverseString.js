function reverseString(str) {
  let userString = '';
  for (let i = str.length - 1; i >= 0; i--){
    userString = userString + str[i];
  }
  return userString;
}
console.log(reverseString('hello there'));
// Do not edit below this line
module.exports = reverseString;
