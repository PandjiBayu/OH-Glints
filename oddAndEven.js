let odd = [];
let even = [];

for (let i = 0; i < 11; i++) {
  if (i % 2 === 1) {
    odd.push(i);
  } else {
    even.push(i);
  }
}

console.log(even, odd);
