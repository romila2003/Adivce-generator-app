# Frontend Mentor - Advice generator app

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

- Build out the project to the designs provided.

### Screenshot

# Mobile Preview 

![screenshot](https://github.com/romila2003/Adivce-generator-app/blob/main/Mobile%20preview.PNG)

# Mobile Preview - active

![screenshot](https://github.com/romila2003/Adivce-generator-app/blob/main/Mobile%20preview%20-%20active.PNG)

# Desktop Preview 

![screenshot](https://github.com/romila2003/Adivce-generator-app/blob/main/Desktop%20preview.PNG)

# Desktop Preview - active

![screenshot](https://github.com/romila2003/Adivce-generator-app/blob/main/Desktop%20preview%20-%20active.PNG)


### Links

 - Source code: [https://github.com/romila2003/Adivce-generator-app](https://github.com/romila2003/Adivce-generator-app)
 - Live website: [https://frontend-advice-generator-app.netlify.app/](https://frontend-advice-generator-app.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Plain CSS
- Vanilla Javascript
- Flexbox
- Mobile-first workflow

### What I learned

This was a fun challenge since I worked with APIs and am starting to feel more comfortable with using the `async` function and `await` instead of `.then`. For Firefox, you have to clear the catche which affected my code since I use Firefox to run my live server therefore I was confused as to why the button would not work however, after I found out the reason for this issue, it helped me with my code. Regarding the design, I tried to make the design as similar to the picture as possible and enjoyed the process of doing so, particularly the button as it gives of a glowy effect.

Javascript - async/await: 

```javasript

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

```

### Continued development

For future developments, I need to learn more complex concepts and utilise those within future projects. Also, I should form a habit of writing clean codes in HTML regarding the semantics as well as Javascript, to prevent repetitive codes and to make it easier to read. Also, I should begin taking on more challenging responsive projects to test my layout skills. 


## Author

- Frontend Mentor - [@romila2003](https://www.frontendmentor.io/profile/romila2003)
- Twitter - [@romila003](https://www.twitter.com/romila003)

