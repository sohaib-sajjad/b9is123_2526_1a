//write a function to alert if overweight (15kg) baggage
let checkWeight = ()=>{
let weight = parseInt(document.getElementById("weight").value)

if (weight > 16){
document.getElementById("removed").style.display = "inline"
} else{
document.getElementById("removed").style.display = "none"
}

let removeWeight = ()=>{
let weight = parseInt(document.getElementById("weight").value)
let weightTobeRemoved = parseInt(document.getElementById("removed").value)

document.getElementById("weight").value = weight - weightTobeRemoved
}
//call it from the page