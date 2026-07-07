//yell, firstName, firstMiddle,lastName, placeToYell

document.querySelector('#yell').addEventListener('click', yell)

function yell(){
const first = document.querySelector('#firstName').value
const middle = document.querySelector('#firstMiddle').value
const last = document.querySelector('#lastName').value

document.querySelector('#placeToYell').innerText = `${first} ${middle} ${last}`
}