console.log('hello')
// let increase = document.getElementById('increase')
// let reset = document.getElementById('reset')
// let decrease = document.getElementById('decrease')

let initialValue = document.getElementById('value')
let count = 0

function increment() {
    count += 1
    initialValue.innerText = count
}

function decrease() {
    count -= 1
    initialValue.innerText = count
}

function reset() {
    count = 0
    initialValue.innerText = count
}

// function decrease(){
//     ini
// }

// function reset(){
    
// }
