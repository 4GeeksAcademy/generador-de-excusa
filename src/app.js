let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generateExcuse() {
  let whoIndex = getRandomInt(who.length);
  let actionIndex = getRandomInt(action.length);
  let whatIndex = getRandomInt(what.length);
  let whenIndex = getRandomInt(when.length);

  return `${who[whoIndex]} ${action[actionIndex]} ${what[whatIndex]} ${when[whenIndex]}`;
}
window.onload = () => {
  let excuseElement = document.getElementById("excuse");
  excuseElement.innerHTML = generateExcuse();
};
