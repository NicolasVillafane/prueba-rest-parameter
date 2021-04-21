function nums(...num) {
  let sum = 0;
  for (let n of num) {
    sum = sum + n;
  }
  console.log(sum);
}

nums(1 + 2 + 3 + 4 + 5);
