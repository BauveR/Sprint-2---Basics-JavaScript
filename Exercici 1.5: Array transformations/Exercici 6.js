const arr = [11, 12, 13, 14];

const allOk = arr.every((x) => x > 10);
const anyOk = arr.some((x) => x > 10);

console.log (allOk);
console.log (anyOk);