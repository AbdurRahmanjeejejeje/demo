// let getMoney = soppuduppa => soppuduppa(12)

// let giveSoap = (num) => 'soap has given' + 'balance' + num;


// let last = getMoney(giveSoap);
// console.log(last)

// let arr = [1, 2, 3, 4, 5]
// let total = 0;

// function hello(greeting, data) {
//     greeting(data)
// }

// function bye(getting) {
//     getting.forEach(element => {
//         total += element;
//         console.log(`${element}`)
//     });
//     console.log(`Total is ${total}`)
// }

// hello(bye, arr)


function a(letter){

   return letter()

}

function b(){

    let x = 1;
    let y = 1;

    
    return x+y;

}

console.log(a(b))