//your JS code here. If required.
function interactiveSearch(){
	let divContainer=document.getElementsByClassName("search");
	divContainer.classList.toggle("active");
	var searchInput = document.getElementByClassName('input');
    searchInput.focus();
}