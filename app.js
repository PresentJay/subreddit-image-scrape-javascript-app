const subredditName = "programmerhumor";
const fetchingAmount=100;

async function fetchData() {
    const response = await fetch(`https://www.reddit.com/r/programmerhumor.json?limit=${fetchingAmount}`);
    const body = await response.json();

    let displaySubredditName = document.getElementById("subreddit_name")

    var container = document.getElementById("container");

    try {
        let parentdiv = document.createElement("div");
        let index=0
        while (body.data.children[index].data.post_hint != "image") {
            index = getRandomInt(0, 100)
        }
    
        let div = document.createElement("div");
        let h4 = document.createElement("h4");
        let image = document.createElement("img");

        image.src = body.data.children[index].data.url;
        h4.textContent = body.data.children[index].data.title;
        displaySubredditName.textContent = `Subreddit: ${subredditName}`;
        
        div.appendChild(h4);
        div.appendChild(image);
        parentdiv.appendChild(div);
        container.appendChild(parentdiv);

    } catch (e) {
        console.log(`Error: ${e}`)
    }
}

function getRandomInt(min, max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}