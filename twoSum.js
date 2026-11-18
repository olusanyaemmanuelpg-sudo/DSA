// We will make it better in the upcoming challenges

function twoSum(num, target) {
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] + num[j] === target) {
        return [i, j];
      }
    }
  }
}

const res = twoSum([2, 6, 10, 9, 7], 9);
const res2 = twoSum([7, 6, 10, 9, 1], 11);

console.log(res);
console.log(res2);
