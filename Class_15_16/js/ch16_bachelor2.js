const andi = document.querySelector('#andi')
const claire = document.querySelector('#claire')
const sharleen = document.querySelector('#sharleen')

document.querySelector('#andiNext').addEventListener('click', andiNext)
document.querySelector('#claireNext').addEventListener('click', claireNext)
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

function andiNext(){
	claire.className = ('hidden')
	sharleen.className = ('hidden')
	andi.className = ('none')
}

function claireNext(){
	claire.classList.toggle('hidden')
	sharleen.classList.add('hidden')
	andi.classList.add('hidden')
}

function sharleenNext(){
	claire.classList.add('hidden')
	sharleen.classList.toggle('hidden')
	andi.classList.add('hidden')
}
