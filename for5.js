const readline = require('readline');

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

let input = [];

rl.on('line', function (line) {
   input = line.split(' ');

   const N = Number(input[0]);
   let answer = '';
   for (let i = 1; i <= N; i++) {
      answer += `${i}\n`;
   }
   console.log(answer);

}).on('close', function () {
   process.exit();
});