fetch("../_template/header.html")
  .then((response) => response.text())
  .then((data) => document.querySelector("#header").innerHTML = data);

fetch("../_template/footer.html")
  .then((response) => response.text())
  .then((data) => document.querySelector("#footer").innerHTML = data);