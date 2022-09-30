let message = ["Hello, welcome to my personal blog!"];
let textPosition = 0;
let speed = 80;

typewriter = () => {
    document.querySelector(".typedtext").
    innerHTML = message[0].substring(0,textPosition);

    if(textPosition++ !=message[0].length)
    setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter);


