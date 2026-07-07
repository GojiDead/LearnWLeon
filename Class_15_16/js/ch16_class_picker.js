document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  //Conditionals go here
  if(day ==="tuesday" || day === "thursday"){
    /*alert('Class Day!')*/
    document.querySelector('h2').innerHTML = ("Class Day")
  }else if(day === "saturday" || day === "sunday") {
    /*alert('Weekend!')*/
    document.querySelector('h2').innerHTML = ("Weekend!")
  }else{
    /*alert('Boring')*/
    document.querySelector('h2').innerHTML = ("Boring")

  }


}
