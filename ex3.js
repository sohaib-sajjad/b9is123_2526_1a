let listEuler1 = (a, b, l) => 0;//obviously wrong - compute the sum of multiples of a or b in list l
let listEuler2 = (a, l) => 0;//obviously wrong - compute the sum of multiples in list a found in list l
let listEuler3 = (a, l) => 0;//obviously wrong - compute the sum of multiples in list a found in list l

let eulerList1 = (a,b,l) => {
alert(eulerListLogic1(a,b,l))
}

let eulerList2 = (a,l) => {
alert(eulerListLogic2(a,l))
}


let eulerListLogic1 = (a, b, l) => {

    let sum = 0

    l.forEach(element => {
        if (element % a == 0 || element % b == 0) {
            sum += element
        }
    });
    return sum
}

let eulerListLogic2 = (a, l) => {

    let sum = 0

    a.forEach(i => {

        l.forEach(j => {
            if (i % j == 0) {
                sum += j
            }
        });

    });

    return sum;
}
