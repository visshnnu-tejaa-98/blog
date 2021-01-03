/////////////////////////////////////////////////////////  login page cookie check  ////////////////////////////////////////////////////////

let finalArray = []
let obj = {};
let inputData = document.getElementById("login-input")
let loginBtn = document.getElementById("button")

// console.log(inputData)
// console.log(loginBtn)

loginBtn.addEventListener("click",function(e){
    console.log(inputData.value)
    if(inputData.value === "123123123"){
        document.cookie = "user=loggedIn"
    }
    cookieCheck(document.cookie)
    // console.log(document.cookie)


})



function cookieCheck(str){
    let array = str.split(";").map(cookie => cookie.split("="));
    arrayToObj(array)  
    // console.log(obj.user)
    cookieCheck = obj.user ==="loggedIn"
    console.log(cookieCheck)
}




function arrayToObj(array){
    for(let i=0;i<array.length;i++){
        obj[array[i][0]] = array[i][1]
        finalArray.push(obj)
        // console.log(obj)
    }
}


/////////////////////////////////////////////////////////  new Post  ////////////////////////////////////////////////////////

