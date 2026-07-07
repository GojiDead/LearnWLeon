const contestants = document.querySelectorAll('.contestant')

//Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))
//
//function checkForRose(click){
//    if(click.target.classList.contains('won')){
//        document.querySelector('#nikki').classList.toggle('hidden')
//    }else(alert("I wish Sharleen was here"))
//}


Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

function checkForRose(information){
    if(information.target.classList.contains('won')){
        document.querySelector('#nikki').classList.toggle('hidden')
        }else(alert("I wish Sharleen was here"))
}
