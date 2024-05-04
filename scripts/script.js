const divNums = document.querySelector(".numbers");
for (let index = 100; index >= 50; index -= 10) {
  let num = document.createElement("p");
  divNums.append(num);
  num.innerText = index;
}

let strArray = [
  "Lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipisicing",
  "elit",
];

const divStr = document.querySelector(".strings_container");
for (let index = 0; index < strArray.length; index++) {
  let strP = document.createElement("p");
  divStr.append(strP);
  strP.innerText = strArray[index];
}

const users = [
  {
    first_name: "John",
    last_name: "Snow",
    age: 20,
  },
  {
    first_name: "Jane",
    last_name: "Doe",
    age: 37,
  },
  {
    first_name: "Jake",
    last_name: "Smith",
    age: 23,
  },
  {
    first_name: "Lucy",
    last_name: "Sage",
    age: 17,
  },
];

const divUsers = document.querySelector(".users_container");
for (let index = 0; index < users.length; index++) {
  const { first_name, last_name, age } = users[index];
  if (age >= 18) {
    let firstNameP = document.createElement("p");
    firstNameP.innerText = `First name: ${first_name}`;

    let lastNameP = document.createElement("p");
    lastNameP.innerText = `Last name: ${last_name}`;

    let ageP = document.createElement("p");
    ageP.innerText = `Age: ${age}`;

    const div = document.createElement("div");
    div.append(firstNameP, lastNameP, ageP);

    divUsers.append(div)
  }
}
