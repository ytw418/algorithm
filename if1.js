//두 수 비교하기 
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' '); // 공백추가

  let num1 = Number(input[0]); //인덱스 1번
  let num2 = Number(input[1]); //인덱스 2번

  if (num1 > num2) {
    console.log('>');
  } else if (num1 < num2) {
    console.log('<');
  } else {
    console.log('==');
  }

}).on('close', function () {
  process.exit(); //끝
});