for (let letter of "JavaScript") {
  console.log(letter);
}

let topics = new Map();
topics.set("HTML", "/topic/html");
topics.set("CSS", "/topic/css");
topics.set("JavaScript", "/topic/javascript");

for (let topic of topics.keys()) {
  console.log("keys", topic);
}

for (let topic of topics.values()) {
  console.log("vals", topic);
}

for (let topic of topics.entries()) {
  console.log("entr", topic);
}
