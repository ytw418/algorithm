// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// let max = Number(input[0]);
// let answer = '';

// for (let i = 1; i <= max; i++) {
//     let num = input[i].split(' ');
//     answer += Number(num[0]) + Number(num[1]) + '\n';
// }

// console.log(answer);



const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    /*

    5	      [ '5', [ '1 1' ], [ '12 34' ], [ '5 500' ]
    1 1             , [ '5 500' ] , [ '40 60' ], [ ' 1000 1000' ] ]
    12 34
    5 500
    40 60
    1000 1000

    */
    const T = Number(input[0]);

    for (let i = 1; i <= T; i++) {
        let num1 = Number(input[i].split(' ')[0]);
        let num2 = Number(input[i].split(' ')[1]);

        console.log(num1 + num2);
    }

    process.exit();
});
