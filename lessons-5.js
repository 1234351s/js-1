/* Завдання 1 */
const drink = "Coffee";

switch (drink) {
  case "Coffee":
    console.log("Coffee selected");
    break;
  case "Tea":
    console.log("Tea selected");
    break;
  case "Juice":
    console.log("Juice selected");
    break;
  default:
    console.log("Unknown drink");
}

/* Завдання 2 */

const dayOfWeek = "Thursday";

if (
  ["Monday" && "Thuesday" && "Wednsdey" && "Thursday" && "Friday"].includes(
    dayOfWeek
  )
) {
  console.log("Це робочий день");
} else if (["Saturday", "Sunday"].includes(dayOfWeek)) {
  console.log("Unknown day");
} else {
  console.log("Weekend day");
}

/* Завдання 3 */

const monthNumber = 1;

if ([12, 1, 2].includes(monthNumber)) {
  console.log("Winter");
} else if ([3, 4, 5].includes(monthNumber)) {
  console.log("Spring");
} else if ([6, 7, 8].includes(monthNumber)) {
  console.log("Summer");
} else if ([9, 10, 11].includes(monthNumber)) {
  console.log("Autumn");
} else {
  console.log("Unknownmonth");
}

/* Завдання 4 */

const color = "Red";

switch (color) {
  case "Red":
    console.log("Stop");
    break;
  case "Green":
    console.log("Go");
    break;
  case "Yellow":
    console.log("Wait");
    break;
  default:
    console.log("Unknown color");
}
