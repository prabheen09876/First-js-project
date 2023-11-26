// var a = document.querySelector("h1")
//  console.log(a)
//  a.innerHTML= "new learning DOM"
//  a.style.backgroundColor= "grey"
//  a.addEventListener("click", function(){
//     a.style.backgroundColor="red"
//  })



var a = document.querySelector("#bulb");
var btn = document.querySelector("button");
var flag = 0

btn.addEventListener("click", function() {
  if(flag == 0) {
    a.style.backgroundColor = "yellow";
    console.log("clicked")
    flag = 1
  }else{
    a.style.backgroundColor = "white";
    console.log("again clicked")
    flag = 0
  }
 
});
