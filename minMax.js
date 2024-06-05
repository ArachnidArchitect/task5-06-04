let array = document.querySelector('#arrayDisp')
let display = document.querySelector('#display')
let button1 = document.querySelector('#min')
let button2 = document.querySelector('#max')


let myArray = [2,5,7,10,50]
function returnMax() {
   console.log(Math.max(...myArray))
   display.innerText = 'Minimum value is: '+Math.max(...myArray)
}
function returnMin() {
    console.log(Math.min(...myArray))
    display.innerText = 'Maximum value is: '+Math.min(...myArray)
}




array.innerText = myArray

button1.addEventListener('click', returnMin)
button2.addEventListener('click', returnMax)
// symbol iterator
