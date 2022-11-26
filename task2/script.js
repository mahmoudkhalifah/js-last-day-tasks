
function edit() {
    var outerDiv = document.body.firstElementChild;
    outerDiv.lastElementChild.firstElementChild.style.listStyleType = "circle";

    var img = outerDiv.firstElementChild.firstElementChild;
    var div1 = outerDiv.firstElementChild;
    var newDiv = div1.cloneNode();
    var newImg = img.cloneNode();
    outerDiv.appendChild(newDiv);
    newDiv.appendChild(newImg);

    div1.style.textAlign = "right";
    newDiv.style.textAlign = "left";
}

edit();