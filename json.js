let json = {
  username: "abc",
  age: 30,
  address: "Nanded",
  hobbies: ["a", "b", "c"],
};


console.log(JSON.stringify(json));


let users = [{ name: "mahesh" }, { name: "ram" }];

users.forEach((user) => {
    console.log(user.name);
})