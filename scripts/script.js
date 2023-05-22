function renderImagesList(data) {
    let wrapper = document.querySelector('#images')
    wrapper.innerHTML = ''
    let counter = 0
    for (let item in data) {
        // console.log(counter)
        if (counter === 5) break
        let imgName = item,
            maxBoxes = data[item],
            imgItem = document.createElement('a')

        imgItem.setAttribute('href', `meme.html?meme=${imgName}&maxtextbox=${maxBoxes}`)
        imgItem.innerHTML = `
            <img data-image="${imgName}" class="gallery_img" src="assets/5089764.png">
        `
        wrapper.appendChild(imgItem)
        counter++
    }
    document.querySelectorAll('#images .gallery_img').forEach(img => {
        let imgName = img.getAttribute('data-image')
        console.log(imgName)
        setTimeout(function () {
            getImage(imgName, img)
        }, 1000)

    })
}
function getImagesNames() {
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": "https://meme-generator-and-template-database.p.rapidapi.com/templates",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "41c6e9b985msh5b28da27525771ep154e00jsnb47295e86f2f",
            "X-RapidAPI-Host": "meme-generator-and-template-database.p.rapidapi.com"
        },
        success: function (response) {
            renderImagesList(response)
        },
        onerror: function (err) {
            console.log(err)
        }
    })
}

let timer
function search(value = '') {

    if (value.length > 2) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            const settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://meme-generator-and-template-database.p.rapidapi.com/search?searchString=" + value,
                "method": "GET",
                "headers": {
                    "X-RapidAPI-Key": "092130daefmshd3cbdecb745d106p11bda4jsna8a6619bc6dc",
                    "X-RapidAPI-Host": "meme-generator-and-template-database.p.rapidapi.com"
                }
            };

            $.ajax(settings).done(function (response) {
                renderImagesList(response)
            });
        }, 1000);
    } else {
        getImagesNames()
    }
}



/* /js */
$(document).ready(function () {
    getImagesNames()
})


