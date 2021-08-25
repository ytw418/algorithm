const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input = line.split('/n');

  let num1 = Number(input[0]);
  

  if (num1>=90 && num1<=100) {
    console.log('A');
  } else if (num1 >=80&&num1<=89) {
    console.log('B');
  } else if (num1 >=70&&num1<=79){
    console.log('C');
  }else if (num1 >=60&&num1<=69){
    console.log('D');
  }
    else
    {console.log('F');
}

}).on('close', function () {
  process.exit();
});