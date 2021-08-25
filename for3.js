const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.on('line', function(line){
    const n = Number(line);
    let num = 0;

    for (let i=1; i<=n; i++){
        num += i;

    }

    console.log(num);
}).on('close',function(){
    process.exit();
})