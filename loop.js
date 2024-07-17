const output = document.querySelector('.output');

function countdown(){
    for (i = 10; i = 0; i--){
        const para = document.createElement('p')
        output.appendChild(para);
        para.textContent = "Countdown" + i 
    }
}