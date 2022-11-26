var img1 = document.getElementById("1");
var img2 = document.getElementById("2");
var img3 = document.getElementById("3");
var goBtn = document.getElementById("go");
var resetBtn = document.getElementById("reset");

img1.style.position="relative";
img2.style.position="relative";
img3.style.position="relative";

img1.style.left=x+"px";
img2.style.right=x+"px";
img3.style.top=x+"px";

reset();

var time,x=5;
function move () {
    time = setInterval(function () {
        if(parseInt(img1.style.left)<=0 || parseInt(img1.style.left)>450) {
            x*=-1;
        }
        img1.style.left=(parseInt(img1.style.left)-x)+"px";
        img2.style.right=(parseInt(img2.style.right)-x)+"px";
        img3.style.top= (parseInt(img3.style.top)-x)+"px";
    },50);
}

function stop () {
    clearInterval(time);
}

function reset () {
    img1.style.left="450px";
    img1.style.top="200px";
    img2.style.right="50px";
    img2.style.top="200px";
    img3.style.top="450px";
    img3.style.left="125px";
}

goBtn.onclick = function () {
    if(goBtn.value == "go") {
        goBtn.value = "stop";
        move();
    } else {
        goBtn.value = "go";
        stop();
    }
}

resetBtn.onclick = reset;
