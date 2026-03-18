let num = [1, 2, 3, 4, 5];
num.push(56);
console.log(num);

num.pop(4);
console.log(num);

const person = {
    name: ["Cameron", "Donya"],
    age: [19, 23],
    city: ["Toronto", "Waterloo"]
};

for (const p in person) {
    console.log(p + ": " + person[p][0]);
}

person["name"] += ",Jeff";

console.log(person);


const add = (n) => n + 1;
const mult = (a, b) => a * b;
console.log(add(45));
console.log(mult(4,5));

let evens = num.filter(n => n % 2 == 0);
console.log(evens);

let [e1, e2] = evens;
console.log(e2);

