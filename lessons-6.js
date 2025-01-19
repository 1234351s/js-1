//1 завдання
let i = 1;
while (i <= 10) {
  console.log(i);
  i = i + 1;
}

//2 Завдання
for (let i = 2; i <= 20; i = i + 2) {
  console.log(i);
}

//3 завдання
const number = 7;
for (let i = 1; i <= 10; i = i + 1) {
  console.log(number + " x " + i + " = " + number * i);
}

//4 завдання
const n = 10;
for (let i = 1; i < n; i = i + 1) {
  if (i >= n) {
    break;
  }
  console.log(i);
}

console.log(i);
//5 завдання
let j = 1;
while (j <= 20) {
  if (j % 3 === 0) {
    j = j + 1;
    continue;
  }
  console.log(j);
  j = j + 1;
}
