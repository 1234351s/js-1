// // Створити стрілкову функцію hello1(),
// // // яка при визові буде вертати текст “Привіт JavaScript”. */
// // явне повернення
// const Hello1 = () => {
//   return "Hello Js";
// };
// console.log(Hello1());
// // Неявне повернення
// const Hello1 = () => "Hello Js";
// console.log(Hello1());
// /*   2.
// Напишіть стрілкову функцію hello2(),
// яка при виклику буде приймати змінну userName
// (наприклад, «Василь») і виводити рядок
// (в нашому випадку «Привіт, Василь»). */

// const hello2 = (userName) => "Привіт, " + userName;
// console.log(hello2("Vasil"));
// console.log(hello2("Nazar"));
// console.log(hello2("Matviy"));
// console.log(hello2("Andriy"));
// const mul = (n, m) => {
//   const multiply = n * m;
//   const total = n + m;
//   const difference = n - m;
//   return [multiply, total, difference];
// };

// console.log(mul(6, 6));

// const mul = (n, m) => [n * m, n + m, n - m];

// console.log(mul(6, 6));

// const myAverageScore = (array) => {
//     let sum = 0
//     for (const num of array) {
//         sum += num
//     }

//     console.log(sum);

//     const average = sum / array.length;
//     console.log(average);

//     if (average > 90 && average <= 100) {
//         return "Averagescore: A"
//     }
//     if (average >= 81 && average <= 90) {
//         return "Averagescore: B"
//     }
//     if (average >= 71 && average <= 80) {
//         return "Averagescore: C"
//     }
//     if (average

// const apartment = {
//   descr: "Апартаменты в центре города",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Арсеній",
//     phone: "982-126-1588",
//     email: "asdasdasd@aptmail.com",
//   },
//   showprice() {
//     return this.price;
//   },
//   changePrice(newPrice) {
//     this.price = newPrice;
//     return `Ціна зміненна на ${this.price}`;
//   },
// };
// console.log(apartment.changePrice(2000));
// console.log(apartment.showprice());

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;

// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Арсеній Желук";
// apartment.tags.push("trusted");

// До об’єкту myObject додати методи increaseAge(age),
// який буде отримувати число та збільшувати вік на це число.

// До об’єкту myObject додати методи changeOccupation(position),
// який буде отримувати посаду та змінювати властивість occupation

// const myObject = {
//   name: "Kate",
//   age: 30,
//   city: "Kyiv",
// occupation: "designer",
// increaseAge(age) {
//     console.log(this);
//     this.age = age;
// },
// changeOccupation(position) {
//   this.occupation = position
// }
// }
// myObject.increaseAge(32)
// myObject.changeOccupation("teacher")
// console.log(myObject);
