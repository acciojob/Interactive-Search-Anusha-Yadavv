//your JS code here. If required.
function interactiveSearch(){
	let divContainer=document.getElementById("searchContainer");
	// let cssClassName=
	divContainer.classList.toggle("search");
	var searchInput = document.getElementsByClassName('input');
    searchInput.focus();
}