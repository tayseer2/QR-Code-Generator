let imgBox = document.getElementById('imgBox');
let qrImg = document.getElementById('qrimg');
let textInput = document.getElementById('textInput');

function generateQR() {
    if (textInput.value.length > 0) {
        qrImg.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + textInput.value
        imgBox.classList.add("show-img")
    } else {
        textInput.classList.add("error")
        setTimeout(() => {
            textInput.classList.remove("error")
        }, 1000)
    }
}

