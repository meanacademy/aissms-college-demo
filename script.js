// alert('Hello World!');
var username = "Ram";
console.log(username);
// alert(username);
document.getElementById("name").innerHTML = username;

username = "Laxman";
console.log(username);

var username = "Seeta";
console.log(username);

let address = "Pune";
console.log(address);

address = "Mumbai";
console.log(address);

let address2 = "Nanded";
console.log(address2);

function myFunction() {
  let username = "Mahesh";
  console.log(username);
}

myFunction();
console.log(username);

const pi = 3.14;
// pi = 1.5;
console.log(pi);

//traditional function
function hello() {
  console.log("Hello World");
}
hello();

let helloArrow = () => {
  console.log("hello world from arrow function");
  console.log();
};

helloArrow();

let addition = (n1 = 0, n2 = 0) => {
  console.log(n1 + n2);
};

addition(10);


let functionOne = () => {
    console.log("this is function one");
}

let functionTwo = (username, callback) => {
    console.log(username, callback);
    console.log('this is function two');
    callback(); 
}

// functionOne()
functionTwo('mahesh', functionOne);