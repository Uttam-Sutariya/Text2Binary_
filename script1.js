let btn = document.querySelector('#btn');
let input = document.querySelector('#input');
let outputDisplay = document.querySelector('#output');

btn.addEventListener('click' , () => {
    let inputstr = input.value;
    let splitInArr = inputstr.split("");
    for(let i in splitInArr){
        splitInArr[i] = splitInArr[i].charCodeAt(0).toString(2);
    }
    let joinstr = splitInArr.join(" ");
    outputDisplay.value = joinstr;
});