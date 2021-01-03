///////////////////////////////////////////////////////// new post button  /////////////////////////////////////////////////////////
let obj = {}
let array;
finalArray = []
let cookieStatus ;

let newPost = document.getElementById("new-post")
let strip = document.getElementById("strip")
console.log(strip)
cookieCheck(document.cookie)
console.log(cookieStatus)

if(cookieStatus==="true"){
    console.log("triggered")
    console.log(newPost)
    newPost.classList.remove("hidden")
    strip.classList.add("hidden")
}

function cookieCheck(str){
    array = str.split(";").map(cookie => cookie.split("="));
    arrayToObj(array)  
    // console.log(obj.user)
    cookieCheck = obj.user ==="loggedIn"
    cookieStatus = cookieCheck.toString()
    console.log(cookieCheck)
}

function arrayToObj(array){
    for(let i=0;i<array.length;i++){
        obj[array[i][0]] = array[i][1]
        finalArray.push(obj)
    }
}

///////////////////////////////////////////////////////// posts array  /////////////////////////////////////////////////////////

let postsArray = [
    {
        "heading":"Magna nostrud incididunt cupidatat cillum incididunt et nisi in ut minim reprehenderit.",
        "description":"Labore irure irure laborum quis tempor aliqua. Dude",
        "time":"February 19, 2020"
    },
    {
        "heading":"Dolore pariatur amet ullamco aliquip mollit aliqua qui.",
        "description":"Eiusmod ipsum do dolore fugiat consequat quis non qui velit consectetur velit.",
        "time":"February 17, 2020"
    },
    {
        "heading":"Magna nostrud incididunt cupidatat cillum incididunt et nisi in ut minim reprehenderit.",
        "description":"Labore irure irure laborum quis tempor aliqua. Dude",
        "time":"February 19, 2020"
    }
];


let margin = document.getElementById("margin")
console.log(margin)

// function  createArticle(){
//     let article = document.createElement("article");
//     article.innerHTML = `
//     <h1 class="bold">Magna nostrud incididunt cupidatat cillum incididunt et nisi in ut minim reprehenderit.</h1>
//     <p class="article-description">Labore irure irure laborum quis tempor aliqua. Dude</p>
//     <i>February 19, 2020</i>`
//     margin.append(article)
// }


for(let i=0;i<postsArray.length;i++){
    let article = document.createElement("article");
    article.innerHTML = `
    <h1 class="bold">${postsArray[i].heading}</h1>
    <p class="article-description">${postsArray[i].description}</p>
    <i>${postsArray[i].time}</i>`
    margin.append(article)
}