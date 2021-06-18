let btn = document.querySelector('#btn');
let input = document.querySelector('#input');
let outputDisplay = document.querySelector('#output');

btn.addEventListener('click', () => {
    let inputstr = input.value;
    let splitedArr = inputstr.split(" ");
    for(let i in splitedArr){
        splitedArr[i] = String.fromCharCode(parseInt(splitedArr[i], 2));
    }
    let joinstr = splitedArr.join("");
    outputDisplay.value = joinstr;
});