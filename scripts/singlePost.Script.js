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


