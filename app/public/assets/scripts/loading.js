function startLoading(){canvas.classList.remove("hidden"),loop=setInterval(drawMain,20)}function stopLoading(){clearInterval(loop)}function drawOutline(){ctx.beginPath(),ctx.rect(1,1,width-1,height-1),ctx.stroke(),ctx.closePath()}function drawCircle(){ctx.beginPath(),ctx.lineWidth=1,ctx.moveTo(width/2+25,height/2),ctx.lineTo(width/2+50,height/2),ctx.lineWidth=3,ctx.lineCap="round",ctx.strokeStyle="grey",ctx.arc(width/2,height/2,25,0,progress*Math.PI,!0),ctx.lineTo(width/2,height/2),ctx.stroke(),ctx.fillStyle="silver",ctx.fill(),ctx.closePath(),ctx.beginPath(),ctx.arc(width/2,height/2,50,0,progress*Math.PI,!0),ctx.stroke(),ctx.closePath()}function drawMessage(){var t="Loading.";ctx.font="24px Arial",ctx.fillStyle="grey",progress>=.66&&(t+="."),progress>=1.33&&(t+="."),ctx.fillText(t,105,240),(progress+=progressIncrement)>=2&&(progress=0)}function drawMain(){console.log(loop),ctx.clearRect(0,0,width,height),drawCircle(),drawMessage()}var canvas=document.getElementById("loadingCanvas"),ctx=canvas.getContext("2d"),width=canvas.width,height=canvas.height,progress=0,progressIncrement=1/60,loop;