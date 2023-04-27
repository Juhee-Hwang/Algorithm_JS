const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let arr = [];
    
    for (let i = 0; i < str.length; i++) { // 각 문자를 순회하면 확인
        if (str[i] === str[i].toUpperCase()) { // 해당 글자가 대문자면
            arr.push(str[i].toLowerCase()); // 소문자로 바꾸어서 넣고
        } else { // 대문자가 아니라면, 소문자라면
            arr.push(str[i].toUpperCase()); // 대문자로 바꾸어서 넣기
        }
    }
    console.log(arr.join(''))
});