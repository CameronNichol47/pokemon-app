/*const nums = [1, 2, 3 ,4];
const squared = nums.map(n => n*n);
const even = nums.filter(n=> n % 2 == 0);
const red = nums.reduce(n=> n % 2 != 0);

console.log(even);*/

//Q1
let x = 10;
const y =5;

console.log(x+y);

//Q2
function square(n) {
    return n**2;
}

const squareArrow = (n) => n**2;

console.log(square(5));
console.log (squareArrow(4));

//Q3
const isAdult = (age) => age >= 18 ? true : false;
console.log(isAdult(21));
console.log(isAdult(2));

//Q4
const nums = [1, 2, 3, 4, 5];
const mul10 = nums.map(n=> n*10);
console.log(mul10);

//Q5
const nums1 = [3, 8, 12, 5, 20, 7];
const gr10 = nums1.filter(n => n > 10);
console.log(gr10);

//Q6
const nums2 = [2, 4, 6, 8];
const sum = nums2.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

//Q7
const letters = ["a", "b", "a", "c", "b", "a"];
const count = letters.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});
console.log(count);

//Q8
const even2 = nums.filter(n => n % 2 == 0);
const squareE = even2.map(n => n**2);
console.log(squareE);

//Q9
const user = {
  name: "Sam",
  age: 20,
  score: 95,
  predictions: [0.2, 0.8]
};

console.log(user.name);
console.log(user.score);
console.log(user.predictions[1]);

//Q10
const grades = {
  math: 90,
  cs: 95,
  stats: 88
};

for (const g in grades) {
    console.log(g + ": " + grades[g]);
}