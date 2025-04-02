// // 1 завдання 
// const calculateTotalBalance = users => {
//     return users.reduce((total, user) => total + user.balance, 0);
//   };
// //   2 завдання
// const getUsersWithFriend = (users, friendName) => {
//     return users
//       .filter(user => user.friends.includes(friendName))
//       .map(user => user.name);
//   };

// //   3 завдання
// const getNamesSortedByFriendsCount = users => {
//     return [...users]
//       .sort((a, b) => a.friends.length - b.friends.length)
//       .map(user => user.name);
//   };
// // 4 завдання 
// const getSortedUniqueSkills = users => {
//     return [...new Set(users.flatMap(user => user.skills))].sort();
//   };
  