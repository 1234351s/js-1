// 1 завдання

const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let result = "";

for (let i = 0; i < friends.length; i++) {
  result += friends[i];
  if (i < friends.length - 1) {
    result += ",";
  }
}

console.log(result);

// Завдання 1 через join якщо не так потрібно напишить мені у телеграм бо у ЛМС я можу не побачити

const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
const result = friends.join(",");

console.log(result);

// 2 завдання

const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];

const indexToAdd = 2;
const newCard = "newCard";
cards.splice(indexToAdd, 0, newCard);

console.log(cards);

// 3 завдання

const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];
const cardToRemove = "Карточка-3";
const indexToRemove = cards.indexOf(cardToRemove);

if (indexToRemove !== -1) {
  cards.splice(indexToRemove, 1);
}

console.log(cards);
// 4 завдання
const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];
const cardToInsert = "Карточка-6";
const indexToInsert = 2;

cards.splice(indexToInsert, 0, cardToInsert);

console.log(cards);
// 5 завдання
const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];
const cardToUpdate = "Карточка-4";
const indexToUpdate = cards.indexOf(cardToUpdate);

if (indexToUpdate !== -1) {
  cards.splice(indexToUpdate, 1, "UpdateCard");
}

console.log(cards);
// Якщо щось не  так зробив чи не по тому методу чи щось інше будь ласка напишить мені у телеграм бо я могу по іншому методу томущо я ще багато дивився у ютубі методи и разлічні задачки
