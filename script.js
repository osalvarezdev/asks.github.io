const heartCreate = () =>{
    const container = document.querySelector('.container'); // Target the container
    const containerRect = container.getBoundingClientRect(); // Get container size

    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText ='❤︎'
    heart.style.left = Math.random() * containerRect.width + 'px'; 
    heart.style.top = Math.random() * containerRect.height + 'px';
    heart.style.animationDuration = Math.random() * 2+3+'s';
    container.appendChild(heart);

  
}
const questionCreate = () =>{
    const container = document.querySelector('.container'); // Target the container
    const containerRect = container.getBoundingClientRect(); // Get container size

    const question = document.createElement('div');
    question.classList.add('question');
    question.innerText ='?'
    question.style.left = Math.random() * containerRect.width + 'px'; 
    question.style.top = Math.random() * containerRect.height + 'px';
    question.style.animationDuration = Math.random() * 2+3+'s';
    container.appendChild(question);

    setTimeout(() => {
        question.remove();
    }, 5000);
}
const teardrop = () =>{
    const container = document.querySelector('.container'); // Target the container
    const containerRect = container.getBoundingClientRect(); // Get container size

    const drop = document.createElement('div');
    drop.classList.add('drop');
    drop.innerText ='💧'
    drop.style.position = 'absolute';
    drop.style.left = Math.random() * containerRect.width + 'px'; 
    
    drop.style.top = '0px';
    drop.style.animationDuration = Math.random() * 2+3+'s';
    container.appendChild(drop);
    setTimeout(() => {
        drop.remove();
    }, 5000);
     
}
let questInterval = setInterval(questionCreate, 700);
let noClickCount = 0;
let teardropInt = null; // Declare teardropInt outside the function

function respond(answer) {
    let responseText = document.getElementById('response');
    let yes = document.getElementById('yes');
    let no = document.getElementById('no');
    let gif = document.getElementById('melody');

    // Disable only the opposite button and change its style
    if (answer === 'no') {
        noClickCount++;
        if (noClickCount === 1) {
            gif.src = "eyes.gif";
            responseText.innerText = "Are you sure? 🥺";
        } else if (noClickCount === 2) {
            gif.src = "choice.gif";
            responseText.innerText = "Think about it again... 😭";
        } else if (noClickCount === 3) {
            gif.src = "sad.gif";
            responseText.innerText = "I wanna go on a date with you... T^T";
            no.disabled = true;
            no.classList.add("disabled-button");
            teardropInt = setInterval(teardrop, 1500);
        }

        clearInterval(questInterval);

    } else {
        responseText.innerText = "Yay! Can't wait! 🎉";
        gif.src = "happy.gif";
        no.disabled = true;
        no.classList.add("disabled-button");
        no.onmouseover = null;
        clearInterval(questInterval);

        // Clear the teardrop interval if it exists
        if (teardropInt !== null) {
            clearInterval(teardropInt);
            teardropInt = null; // Reset the variable
        }

        setInterval(heartCreate, 1000);
    }
}