var promise = new Promise(function (resolve, reject) {
  const x = "India";
  const y = "Germany";

  if (x === y) {
    resolve();
  } else {
    reject();
  }
});

promise
  .then(function () {
    console.log("Promise is resolved, country is India.");
  })
  .catch(function () {
    console.log("Promise rejected, due to some error.");
  });
