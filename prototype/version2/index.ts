// decleare
const contentCenter = document.getElementById('content');

const containerDiv  = document.createElement('div');

const uploadDiv = document.createElement("div");


// input
const input = document.createElement("input")
input.type = "file"
input.id = "uploadfile"

const btn = document.createElement("input")
btn.type = "button"
btn.value = "upload"
btn.onclick = containerUploadImage

uploadDiv.append(input,btn)
contentCenter?.append(uploadDiv, containerDiv)

// container
function containerUploadImage(): void{
    if(input.files != null && input.files.length > 0){
        const imgDiv = document.createElement("div")
        const img = document.createElement("img")
        img.src = URL.createObjectURL(input.files[0])
        img.classList.add("image")
        imgDiv.append(img)
        containerDiv.append(imgDiv)
        input.value = ""
    }
}