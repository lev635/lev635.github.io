fetch("include/page.html")
.then((response) => response.text())
.then((data) => document.querySelector("#idx").innerHTML = data);
