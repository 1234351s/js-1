// 1 завдання Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Методи повинні зпрацьовувати при натисканні на кнопки “поповнити рахунок” та отримати ‘готівку’ відповідно. Після проведення операції виводити повідомлення про залишок на рахунку.
const bankAccount = {
  ownerName: "",
  accountNumber: "",
  balance: 0,
  deposit(amount) {
    this.balance += amount;
    console.log(`Баланс після поповнення: ${this.balance}`);
  },
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Баланс після зняття: ${this.balance}`);
    } else {
      console.log("Недостатньо коштів на рахунку.");
    }
  },
};

bankAccount.ownerName = "Арсеній Желук";
bankAccount.accountNumber = "1234567890";
bankAccount.deposit(100);
bankAccount.withdraw(50);
// 2 завдання Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з інпуту на сторінці. Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки
const weather = {
  temperature: 0,
  humidity: 0,
  windSpeed: 0,
  isBelowFreezing() {
    return this.temperature < 0;
  },
};

weather.temperature = -5;
if (weather.isBelowFreezing()) {
  console.log("Температура нижче 0 градусів Цельсія");
} else {
  console.log("Температура вище або рівна 0 градусів Цельсія");
}
// 3 завдання Створіть об’єкт "user", якbq буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password. Використайте інпути для запису значень властивостей в об’єкт
const user = {
  name: "",
  email: "",
  password: "",
  login(inputEmail, inputPassword) {
    if (this.email === inputEmail && this.password === inputPassword) {
      console.log("Вхід успішний");
    } else {
      console.log("Неправильний email або пароль");
    }
  },
};

user.name = "Арсеній";
user.email = "asdads@gmail.com";
user.password = "password123";
user.login("asdads@gmail.com", "password123123123");
// 4 завдання Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей на сторінку. Якщо метод повернув "true" то змінити колір тексту поля title на зелений.
const movie = {
  title: "",
  director: "",
  year: 0,
  rating: 0,
  isHighRated() {
    return this.rating > 8;
  },
};

movie.title = "Гарний фільм";
movie.director = "Режисер Кіно";
movie.year = 2022;
movie.rating = 9;

if (movie.isHighRated()) {
  console.log("Це високооцінений фільм");
  console.log("%c" + movie.title, "color: green");
} else {
  console.log("Це не високооцінений фільм");
}
