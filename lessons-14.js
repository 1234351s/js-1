// 1 завдання 
const getUserNames = users => {
    return users.map(user => user.name);
  };
  
  console.log(getUserNames(users));
// 2 завдання
  const getUsersWithEyeColor = (users, color) => {
    return users.filter(user => user.eyeColor === color);
  };
  
  console.log(getUsersWithEyeColor(users, 'blue'));
//  3 завдання
  const getUsersWithGender = (users, gender) => {
    return users.filter(user => user.gender === gender).map(user => user.name);
  };
  
  console.log(getUsersWithGender(users, 'male'));
// 4 завдання
  const getInactiveUsers = users => {
    return users.filter(user => !user.isActive);
  };
  
  console.log(getInactiveUsers(users));
// завдання 5 
  const getUserWithEmail = (users, email) => {
    return users.find(user => user.email === email);
  };
  
  console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
  console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

          