// while loop
let i = 0;
while (i < 21) {
  console.log(i);
  i++;
}
console.log("--------------------------------");

// for with break
for (let j = 0; j < 10; j++) {
  if (j === 5) {
    break; // will break the looping at value 5
  }

  console.log(j);
}
console.log("--------------------------------");

// for with continue
for (let q = 0; q < 10; q++) {
  if (q === 5) {
    continue; // will delete the value 5
  }

  console.log(q);
}
