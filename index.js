// Build a Counter App
count = 0;
numSchoolBuses = 0;
let title = document.createElement("title");
title.innerHTML = "School Simulator";
document.head.appendChild(title);
while(numSchoolBuses > 0){
    setTimeout(useSchoolBuses, 1000);
}

function increment(){
    let countB = document.getElementById("count-el")
    count++;
    console.log(count);
    countB.innerHTML = count;
}

function save(){
    let saved = document.getElementById("saved");
    saved.innerHTML += count + " - ";
}
function buySchoolBus(){
    numSchoolBuses++;
    let counter = document.getElementById("busCounter");
    counter.innerHTML = "School Buses: " + numSchoolBuses;
}
function useSchoolBuses(){
    count += numSchoolBuses;
}