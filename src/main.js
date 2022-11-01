document.getElementById("btn").addEventListener("click", function () {
	if (document.querySelector("h1").hasAttribute("class", "highlight")) {
		document.querySelector("h1").removeAttribute("class", "highlight");
	} else {
		document.querySelector("h1").setAttribute("class", "highlight");
	}
});
