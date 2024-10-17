fetch("../include/header.html")
.then((response) => response.text())
.then((data) => document.querySelector("#header").innerHTML = data);
fetch("../include/footer.html")
.then((response) => response.text())
.then((data) => document.querySelector("#footer").innerHTML = data);

const last = new Date(document.lastModified);
const year = last.getFullYear();
const month = last.getMonth() + 1;
const date = last.getDate();
let fixedMonth = month;
let fixedDate = date;
if (month < 10) {
    fixedMonth = "0" + month;
}
if (date < 10) {
    fixedDate = "0" + date;
}
const datetimeText = year + "-" + fixedMonth + "-" + fixedDate;
const target = document.getElementById('last_modified');
target.textContent = datetimeText;
target.setAttribute("datetime", datetimeText);
