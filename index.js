// Build a Counter App
let title = document.createElement("title");
title.innerHTML = "Chocolate Counter";
document.head.appendChild(title);
function increment(){
    let count = document.getElementById("count-el")
    count.innerHTML = parseInt(count.innerHTML) + 1
}