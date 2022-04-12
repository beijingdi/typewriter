const sentence = "hello there from lighthouse labs";
const printTime = [];
let time = 0;
for (let char in sentence) {
  printTime.push(time);
  time += 1000;
}

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i] + "\n");
  },printTime[i]);
}

