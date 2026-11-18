const capitalizeFirst = (str) =>
  str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

console.log(capitalizeFirst('hello world'));
console.log(capitalizeFirst('WEb deji'));
