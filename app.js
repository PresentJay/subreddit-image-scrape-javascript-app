async function fetchData() {
    const subredditName = "programmerhumor";
    const fetchingAmount = 99;
    const response = await fetch(`https://www.reddit.com/r/${subredditName}.json?limit=${fetchingAmount}`);
    const body = await response.json();
    try {
        let index=0
        while (body.data.children[index].data.post_hint != "image")
            index = getRandomInt(0, fetchingAmount)
        
        let image = document.createElement("img");
        let data = body.data.children[index].data
        image.src = data.url;
        document.body.appendChild(image);
    } catch (e) {
        console.log(`Error: ${e}`)
    }
}

function getRandomInt(min, max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}