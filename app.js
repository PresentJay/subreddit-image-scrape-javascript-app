const subredditName = "programmerhumor";
const category = "topic"

async function fetchData() {

  const response = await fetch(`https://www.reddit.com/r/programmerhumor.json`);
  const body = await response.json();

  let displayCategory = document.getElementById("category_text");
  let displaySubredditName = document.getElementById("subreddit_name")

  var container = document.getElementById("container");

  try {
    let parentdiv = document.createElement("div");
    let targetlist=body.data.children
    let index = getRandomInt(0, targetlist.length)

    if (body.data.children[index].data.post_hint === "image") {
  
        let div = document.createElement("div");
        let h4 = document.createElement("h4");
        let image = document.createElement("img");
  
        image.src = body.data.children[index].data.url;
        h4.textContent = body.data.children[index].data.title;
        displayCategory.textContent = `Category: ${category}`;
        displaySubredditName.textContent = `Subreddit: ${subredditName}`;
        
        div.appendChild(h4);
        div.appendChild(image);
        parentdiv.appendChild(div);
    }

    container.appendChild(parentdiv);

  } catch (e) {
    console.log(`Error: ${e}`)
  }
}


function getRandomInt(min, max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}