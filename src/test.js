const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

let o = "";
let d = "";
let t = null;

console.log()

while (o !== "c" && o !== "f" && o !== "k") {
  o = (readlineSync.question("Enter an origin scale: ")).toLowerCase();
}

while (d !== "c" && d !== "f" && d !== "k") {
  d = (readlineSync.question("Enter a destination scale: ")).toLowerCase();
}

while (t > MAX || t < MIN || t === null) {
  t = (readlineSync.question("Enter a temperature: "));

}

if (o === "c"){
  if (d = "f"){
t = (t * (9 / 5)) + 32

console.log(t)

} else if (d = "k"){
t = t + 273.15

console.log(t)
  }

} else if (o === "f"){
  if (d = "c"){
t = (t - 32) * (5 / 9)

console.log(t)

} else if (d = "k"){
t = (t - 32) * (5 / 9) + 273.15

console.log()

} else if (o === "k"){
    if (d = "c"){
  t = t - 273.15

  console.log(t)

} else if (d = "f"){
  t = (t - 273.15) * (5 / 9) + 32

  console.log(t)
    }
  }
}
