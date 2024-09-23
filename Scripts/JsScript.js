
let x=()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=>console.log(data));
}

let btn=document.querySelector("button");
btn.addEventListener("click",x);


let singleUrl=()=>{
    fetch("https://jsonplaceholder.typicode.com/posts/4")
    .then(res=>res.json())
    .then(d=>console.log(d))
}

let btnOne=document.querySelector("#btnSingle");
btnOne.addEventListener("click",singleUrl);