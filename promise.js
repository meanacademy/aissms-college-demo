let mypromise = new Promise(function (resolve, reject) {
    let name = 'Ram';
    if (false) {
        resolve(name);
    } else {
        reject('Promise Rejected');
    }
})


mypromise
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })