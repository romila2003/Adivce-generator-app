const adviceEl = document.getElementById("advice");
const adviceNumber = document.getElementById("advice-num");
const button = document.getElementById("button");

button.addEventListener("click", generateAdvice);

generateAdvice()

async function generateAdvice() {
    const config = {
        cache: 'no-cache',
    }
    
    const res = await fetch("https://api.adviceslip.com/advice", config);
    const data = await res.json();

    adviceNumber.innerText = data.slip.id;
    adviceEl.innerText = '"' + data.slip.advice + '"';
}