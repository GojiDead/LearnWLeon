//#yell #firstName #firstMiddle #lastName #placeToYell

document.querySelector('#yell').addEventListener('click', trouble)

function trouble(){
const fName = document.querySelector('#firstName').value
const mName = document.querySelector('#firstMiddle').value
const lName = document.querySelector('#lastName').value

document.querySelector('#placeToYell').innerText = `${fName} ${mName} ${lName}`
}