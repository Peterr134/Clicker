// Build a Counter App
count = 0;
numSchoolBuses = 0;
numStrictParents = 0;
let title = document.createElement("title");
title.innerHTML = "School Simulator";
document.head.appendChild(title);
    setInterval(() => {
        let newAmt = numSchoolBuses;
        newAmt *= 1 + (0.05 * numStrictParents);
        newAmt = Math.floor(newAmt);
        let ps = document.getElementById("perSecond");
        ps.innerHTML = "Current Students per Second: " + newAmt;
        count += newAmt;
        
        let countB = document.getElementById("count-el")
        countB.innerHTML = count;
    }, 1000);

function increment(){
    let countB = document.getElementById("count-el")
    count++;
    console.log(count);
    countB.innerHTML = count;
}

function decrement(){
    if(count >= 1){
    let countB = document.getElementById("count-el")
    count--;
    console.log(count);
    countB.innerHTML = count;
    }
}

function save(){
    let saved = document.getElementById("saved");
    saved.innerHTML += count + " - ";
}
function buySchoolBus(){
    if(count >= 10){
    let countB = document.getElementById("count-el")
    numSchoolBuses++;
    count -= 10;
    countB.innerHTML = count;
    let counter = document.getElementById("busCounter");
    counter.innerHTML = "School Buses: " + numSchoolBuses;
    }
}
function buyStrictParent(){
    if(count >= 50){
    let countB = document.getElementById("count-el")
    numStrictParents++;
    count -= 50;
    countB.innerHTML = count;
    let counter = document.getElementById("strPCounter");
    counter.innerHTML = "Strict Parents: " + numStrictParents;
    }
}
function rename(){
    let header = document.getElementById("title")
    let newName = prompt("What should they be called?")
    header.innerHTML = newName + " attending"
}