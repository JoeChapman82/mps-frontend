var canvas = document.getElementById('loadingCanvas');
var ctx = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;
var progress = 0;
var progressIncrement = 1 / 60;
var loop;

function startLoading() {
    canvas.classList.remove('hidden');
    loop = setInterval(drawMain, 20);
    }

function stopLoading() {
    clearInterval(loop);
}

function drawOutline() {
    ctx.beginPath();
    ctx.rect(1, 1, width - 1, height - 1);
    ctx.stroke();
    ctx.closePath();
}

function drawCircle() {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(width / 2 + 25, height / 2);
    ctx.lineTo(width / 2 + 50, height / 2);
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'grey';
    ctx.arc(width / 2, height / 2, 25,  0, progress * Math.PI, true);
    ctx.lineTo(width / 2, height / 2);
    ctx.stroke();
    ctx.fillStyle = 'silver';
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, 50,  0, progress * Math.PI, true);
    // ctx.lineTo(width / 2, height / 2);
    ctx.stroke();
    ctx.closePath();
}

function drawMessage() {
    var message = 'Loading.';

    ctx.font = '24px Arial';
    ctx.fillStyle = 'grey';
    if(progress >= 0.66) {
        message += ".";
    }
    if(progress >= 1.33) {
        message += ".";
    }
    ctx.fillText(message, 105, 240);
    progress += progressIncrement;
    if(progress >= 2) {
        progress = 0;
    }
}

function drawMain() {
    console.log(loop);
    ctx.clearRect(0, 0, width, height);
//    drawOutline();
    drawCircle();
    drawMessage();
}
