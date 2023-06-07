window.onload = function loadFn() {
	var containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function(event) {
		//you code here
    let tagNameTarget = event.target.tagName;
     alert(`Clicked element tag name: ${tagNameTarget}`);

	});
};
