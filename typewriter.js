const sentence = "hello there from lighthouse labs";
let n = 0;
for (const char of sentence) {
  setTimeout(() => {
    //use stdout.write when we want output on the same line
    process.stdout.write(char);
  }, n);
  n += 100;
}

setTimeout(() => {
  console.log('');
}, n);