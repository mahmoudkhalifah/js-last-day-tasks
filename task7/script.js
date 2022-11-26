var myevent = new Event("wait");
var flag = true;
document.body.onkeydown = function() {
    flag = false;
}

document.body.addEventListener("wait", function () {
    alert("please enter data");
});

setTimeout(function () {
    console.log("timeout");
    if(flag) {
        document.body.dispatchEvent(myevent);
    }
},2000);

var form = document.getElementsByTagName("form")[0];
form.onsubmit = function () {
    var flag = confirm("do you want to proceed");
    if(!flag) {
        event.preventDefault();
    }
}