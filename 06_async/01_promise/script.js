const delay = seconds =>
  new Promise((resolve, reject) => {
    if (typeof seconds !== "number") {
      reject(new Error("seconds must be a number"));
    }

    setTimeout(resolve, seconds * 1000);
  });

console.log("Zero seconds");
delay("one")
  .then(() => console.log("1 sec"))
  .catch(err => console.log(err));

console.log("Two seconds");
delay(2)
  .then(() => console.log("2 sec"))
  .catch(err => console.log(err));
