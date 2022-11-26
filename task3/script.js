var imagesBtns;
var selectedImage;
var win;

function generate() {
    var txt = document.getElementsByTagName("textarea")[0].value;
    if(selectedImage) {
        win = window.open("","","width=500,height=500");

        var newDiv = win.document.createElement("div");
        newDiv.style.textAlign = "center";
        
        var newImg = win.document.createElement("img");
        newImg.src = selectedImage.src;
        newImg.width = "350";
        
        var p = win.document.createElement("p");
        p.appendChild(win.document.createTextNode(txt));

        var btn = win.document.createElement("input");
        btn.type = "submit";
        btn.value = "close preview";
        btn.onclick = function () {win.close();}

        win.document.body.appendChild(newDiv);
        newDiv.appendChild(newImg);
        newDiv.appendChild(p);
        newDiv.appendChild(btn);
    }
}

function init() {
    var btn = document.getElementById("btn");
    btn.onclick = generate;
    imagesBtns = document.getElementsByName("image");
    for (var i=0;i<imagesBtns.length;i++) { 
        imagesBtns[i].onclick = selectImage;
    }
}

function selectImage() {
    for (var i=0;i<imagesBtns.length;i++) {
        if(imagesBtns[i].checked) {
            selectedImage = imagesBtns[i].previousElementSibling.previousElementSibling;
            selectedImage.style["border"] = "3px solid red";
        } else {
            imagesBtns[i].previousElementSibling.previousElementSibling.style["border"] = "none";
        }
    }
}

function close() {
    win.close();
}