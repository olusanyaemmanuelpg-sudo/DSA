const reverseString = (strr) => strr.split('').reverse().join('');
console.log(reverseString('hello'));

const palindrome = (str) => str.split('').reverse().join('') === str;
console.log(palindrome('abb'));
