let mypromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise Resolved successfully");
  }, 5000);
});

async function myFunction() {
    let response = await mypromise;
    console.log(response);
    console.log('i am from myfunction');
}


myFunction();