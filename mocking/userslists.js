const faker = require("faker");

const status = ['ACTIVE','VERIFIED','BANNED','DELETED'];
let userList = []


//let id= faker.datatype.uuid();
//let fullName= faker.name.findName();
//let urlImage= faker.image.avatar();
//let dateOfRegister= faker.date.future();
let randomUsers = (amount) => {

  for ( i = 0; i< amount;  i++){
    id = faker.datatype.uuid(),
    fakeFullName = faker.name.findName(),
    fakeUrlImage = faker.image.avatar(),
    fakeDateOfRegister = faker.date.future(),
    status = Math.round(Math.random() * 4)
    //profile= 2
    userList.push(fakeId, fakeFullName, fakeUrlImage, fakeDateOfRegister, status)
  }
  return userList;
}
//console.log(userList)

module.exports = randomUsers;
