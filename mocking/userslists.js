const faker = require("faker");

const status = ['ACTIVE','VERIFIED','BANNED','DELETED'];
let userList = []

let randomUsers = (amount) => {

  for ( i = 0; i< amount;  i++){
    id = faker.datatype.uuid(),
    fakeFullName = faker.name.findName(),
    fakeUrlImage = faker.image.avatar(),
    fakeDateOfRegister = faker.date.future(),
    fakeStatus = status[Math.floor(Math.random() * 4)]
    //profile= 2
    userList.push(fakeId, fakeFullName, fakeUrlImage, fakeDateOfRegister, fakeStatus)
  }
  return userList;
}
//console.log(userList)

module.exports = randomUsers;
