const chosenMeme = get('meme') || ''
const maxBoxes = get('maxtextbox') || ''

function get(name) {
    if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search))
        return decodeURIComponent(name[1]);
}

function setData() {
    document.querySelector('#imageName').innerText = chosenMeme
    getImage(
        chosenMeme,
        document.querySelector('#imageContentBefore')
    )
}

function createMeme() {
    const text = document.querySelector('#inp').value
    const data = {
        "text0": {
            "text": text,
            "font_size": 33
        }
    }

    getImage(
        chosenMeme,
        document.querySelector('#imageContentAfter'),
        data
    )

}

$(document).ready(function () {
    setData()
})

// let img = document.querySelector('#imageContentAfter')
// let btn = document.querySelector('#btn')
//
// btn,addEventListener('click', () =>{
//     let imagePath = img.getAttribute('url')
//     let fileName = getFileName(imagePath)
//     saveAs(imagePath,fileName)
// })
//
// function getFileName(str){
//     return str.substring(str.lastIndexOf('/') + 1)
// }