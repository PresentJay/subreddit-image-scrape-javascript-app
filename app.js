async function fetchData() {
    const subredditName = "programmerhumor";
    const fetchingAmount = 99;
    const response = await fetch(`https://www.reddit.com/r/${subredditName}.json?limit=${fetchingAmount}`);
    const body = await response.json();
    try {
        let index=0
        while (body.data.children[index].data.post_hint != "image")
            index = getRandomInt(0, 100)
        
        let image = document.createElement("img");
        let data = body.data.children[index].data
        image.src = data.url;
        document.body.appendChild(image);
        
        // fetch(data.url, { mode: 'no-cors' })
        //     .then(res => res.blob())
        //     .then(blob => {
        //         let link = document.createElement('a');
        //         let filename = data.url.split('/').pop()
        //         link.download = filename;
        //         link.href = URL.createObjectURL(blob);
        //         link.click();

        //         // delete the internal blob reference, to let the browser clear memory from it
        //         URL.revokeObjectURL(link.href);
        //     });
    } catch (e) {
        console.log(`Error: ${e}`)
    }
}

function getRandomInt(min, max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}