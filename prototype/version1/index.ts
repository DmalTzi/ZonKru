const contentCenter = document.getElementById('content');

const containerDiv  = document.createElement('div');

const uploadDiv = document.createElement("div");

const imageList: HTMLElement[] = []
let position: number = 0;

const positionSpan = document.createElement("span");

// =====input=====
const input = document.createElement("input")
input.type = "file"
input.id = "uploadfile"

const btn = document.createElement("input")
btn.type = "button"
btn.value = "upload"
btn.onclick = uploadImage

const next = document.createElement("input")
next.type = "button"
next.value = "next"
next.onclick = playNext

const prev = document.createElement("input")
prev.type = "button"
prev.value = "prev"
prev.onclick = playPrev

uploadDiv.append(input, btn)
contentCenter?.append(uploadDiv, containerDiv)

// =====function=====
// -----next-----
function playNext(): void {
    console.log(position)
    position++;
    if(position >= imageList.length) {
        position = 0;
    }
    containerDiv.replaceChildren(imageList[position])
    positionSpan.innerText = `${position}`
}
// -----prev-----
function playPrev(): void {
    console.log(position)
    position--;
    if(position < 0) {
        position = imageList.length-1;
    }
    containerDiv.replaceChildren(imageList[position])
    positionSpan.innerText = `${position}`
}


// -----container-----
function uploadImage(): void{
    if(input.files != null && input.files.length > 0){
        const img = document.createElement("img")
        img.src = URL.createObjectURL(input.files[0])
        img.classList.add("image")
        imageList.push(img)
        input.value = ""
        console.log(imageList)

        if (containerDiv.innerHTML == "") {
            containerDiv.append(imageList[0])
        }

        if (imageList.length > 1) {
            uploadDiv.append(prev, positionSpan,next)
            positionSpan.innerText = `${position}`
        }
    }
}