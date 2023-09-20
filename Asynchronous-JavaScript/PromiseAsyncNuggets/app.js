const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolved");
  }, 3000);
});

// async,await
async function PromiseHandler() {
  await promise;
  console.log("value");
}

PromiseHandler();

function getpromise() {
  promise.then((res) => console.log(res));
  console.log("value");
}
getpromise();
