const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let ballX = 350;
let ballY = 200;

let speedX = 4;
let speedY = 3;

let leftPaddle = 150;
let rightPaddle = 150;

let leftScore = 0;
let rightScore = 0;

const face = new Image();
face.src = "mats.png";

document.addEventListener("keydown", e => {

    if(e.key==="w") leftPaddle -= 20;
    if(e.key==="s") leftPaddle += 20;

    if(e.key==="ArrowUp") rightPaddle -= 20;
    if(e.key==="ArrowDown") rightPaddle += 20;

});

function draw(){

    ctx.clearRect(0,0,700,400);

    ctx.fillStyle="black";

    ctx.fillRect(10,leftPaddle,10,100);

    ctx.fillRect(680,rightPaddle,10,100);

    ctx.drawImage(face,ballX-25,ballY-25,50,50);

    ballX += speedX;
    ballY += speedY;

    if(ballY<25 || ballY>375){
        speedY *= -1;
    }

    if(ballX<20 && ballY>leftPaddle && ballY<leftPaddle+100){
        speedX = Math.abs(speedX);
    }

    if(ballX>680 && ballY>rightPaddle && ballY<rightPaddle+100){
        speedX = -Math.abs(speedX);
    }

    if(ballX<0){
        rightScore++;
        ballX=350;
        ballY=200;
    }

    if(ballX>700){
        leftScore++;
        ballX=350;
        ballY=200;
    }

    ctx.fillStyle="black";
    ctx.font="24px Arial";
    ctx.fillText(leftScore+" : "+rightScore,320,30);

    requestAnimationFrame(draw);
}

face.onload = draw;
