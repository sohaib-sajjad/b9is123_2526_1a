//redefine these - ex1 should output the solution to project Euler Q1
//https://projecteuler.net/problem=1
//ex2 should output the sum of all multiples of a or b less than n

let logic = (a, b, n) => {

    let sum = 0

    for (let i = 0; i < n; i++) {
        if (i % a == 0 || i % b == 0) {
            sum += i
        }
    }

    return sum
}

let euler1 = () => {
    alert(logic(3, 5, 1000))
}

let eulerCustom = () => {

let a = parseInt(document.getElementById("a").value)
let b = parseInt(document.getElementById("b").value)
let n = parseInt(document.getElementById("n").value)

    alert(logic(a, b, n))
}