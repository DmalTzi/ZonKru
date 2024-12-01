var contentCenter = document.getElementById('content');
var containerDiv = document.createElement('div');
var uploadDiv = document.createElement("div");
var imageList = [];
var position = 0;
var positionSpan = document.createElement("span");
// =====input=====
var input = document.createElement("input");
input.type = "file";
input.id = "uploadfile";
var btn = document.createElement("input");
btn.type = "button";
btn.value = "upload";
btn.onclick = uploadImage;
var next = document.createElement("input");
next.type = "button";
next.value = "next";
next.onclick = playNext;
var prev = document.createElement("input");
prev.type = "button";
prev.value = "prev";
prev.onclick = playPrev;
uploadDiv.append(input, btn);
contentCenter === null || contentCenter === void 0 ? void 0 : contentCenter.append(uploadDiv, containerDiv);
// =====function=====
// -----next-----
function playNext() {
    console.log(position);
    position++;
    if (position >= imageList.length) {
        position = 0;
    }
    containerDiv.replaceChildren(imageList[position]);
    positionSpan.innerText = "".concat(position);
}
// -----prev-----
function playPrev() {
    console.log(position);
    position--;
    if (position < 0) {
        position = imageList.length - 1;
    }
    containerDiv.replaceChildren(imageList[position]);
    positionSpan.innerText = "".concat(position);
}
// -----container-----
function uploadImage() {
    if (input.files != null && input.files.length > 0) {
        var img = document.createElement("img");
        img.src = URL.createObjectURL(input.files[0]);
        img.classList.add("image");
        imageList.push(img);
        input.value = "";
        console.log(imageList);
        if (containerDiv.innerHTML == "") {
            containerDiv.append(imageList[0]);
        }
        if (imageList.length > 1) {
            uploadDiv.append(prev, positionSpan, next);
            positionSpan.innerText = "".concat(position);
        }
    }
}
