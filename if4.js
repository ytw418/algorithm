const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', function (line) {
    input.push(parseInt(line));
}).on('close', function () {
    const x = Number(input[0]);
    const y = Number(input[1]);
    if (x>0 && y>0) {
        console.log('1');
        } else if (x < 80 && y > 89) {
        console.log('2');
        } else if (x < 0 && y < 0){
        console.log('3');
        } else 
        console.log('4');

    process.exit();
});