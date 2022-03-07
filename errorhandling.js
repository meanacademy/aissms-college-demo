try {
  let age = 15;
  if (age < 18) throw "Age is less for voting in india";
  console.log("You can vote");
} catch (err) {
  console.log("errors: ", err);
} finally {
  console.log("I am finally block");
}
