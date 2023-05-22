function getImage(name, img, data = {}) {
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": "https://meme-generator-and-template-database.p.rapidapi.com/template/"+name,
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "X-RapidAPI-Key": "c1d153bc9bmshae39c02725a86a7p1318dfjsn7150214728f0",
            "X-RapidAPI-Host": "meme-generator-and-template-database.p.rapidapi.com"
        },
        "xhrFields": {
            "responseType": 'blob'
        },
        "processData": false,
        "data": JSON.stringify(data),
        success: function (data) {

            const url = window.URL || window.webkitURL;
            console.log(url)
            const src = url.createObjectURL(data);
            img.setAttribute('src', src);
            // document.querySelector('#btn').setAttribute('href', src)

        }
    });
}
