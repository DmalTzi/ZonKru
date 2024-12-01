// decleare
var contentCenter = document.getElementById('content');
var containerDiv = document.createElement('div');
var uploadDiv = document.createElement("div");
// input
var input = document.createElement("input");
input.type = "file";
input.id = "uploadfile";
var btn = document.createElement("input");
btn.type = "button";
btn.value = "upload";
btn.onclick = containerUploadImage;
uploadDiv.append(input, btn);
contentCenter === null || contentCenter === void 0 ? void 0 : contentCenter.append(uploadDiv, containerDiv);
// container
function containerUploadImage() {
    if (input.files != null && input.files.length > 0) {
        var imgDiv = document.createElement("div");
        var img = document.createElement("img");
        img.src = URL.createObjectURL(input.files[0]);
        img.classList.add("image");
        imgDiv.append(img);
        containerDiv.append(imgDiv);
        input.value = "";
    }
}
