const sentence = "hello there from lighthouse labs";

let delay = 0;
//let i = 0;
for (const char of sentence) {
  //process.stdout.write(char);

  
  setTimeout(() => {
    process.stdout.write(char);// print the char here
  }, delay); // <= 1s delay to make it noticeable. Can dial it down later.

  delay += 50;
}
//console.log("\n");
setTimeout(() => {
  console.log("");// print the char here
}, delay);