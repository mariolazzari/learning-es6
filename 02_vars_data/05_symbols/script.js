const id = Symbol();

console.log("Symbol id:", id);

const courseInfo = {
  title: "JavaScript",
  topics: ["strings", "arrays", "objects"],
  id: "js-course",
};

courseInfo[id] = 41284;
console.log(courseInfo);
