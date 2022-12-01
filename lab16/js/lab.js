// Author: Arantza (asvilchi@ucsc.edu), Patty (cpieper@ucsc.edu), Anika (amittal4@ucsc,edu)
// Created: 11/17/22
// License: Public Domain
document.addEventListener("DOMContentLoaded",() =>{
	fetchCatImage()
	btnClick()
})
function fetchCatImage() {
		let image = document.getElementById ("cat-image")
		fetch ('https://api.thecatapi.com/v1/images/search')
		.then(resp =>resp.json())
		.then(json =>image.src = json[0].url)
}

function btnClick(){
	let button = document.getElementById ("new-cat-btn")
	button.addEventListener("click", fetchCatImage)
}
