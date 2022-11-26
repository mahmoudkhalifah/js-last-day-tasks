window.onkeydown = function (event) {
    
    if (event.altKey) {
        alert("alt");
    } else if (event.ctrlKey) {
        alert("ctrl");
    } else if (event.shiftKey) {
        alert("shift");
    } else {
        alert(event.keyCode);
    }
}

window.oncontextmenu = function (event) {
    event.preventDefault();
}