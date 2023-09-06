"use strict";
// document.getElementById("lefteye").style.backgroundColor = "purple";
// document.getElementById("head").style.transform = "rotate(15deg)";
// document.getElementById("body").style.border ="2px black solid";
// document.getElementById("mouth").style.borderRadius ="15px";
// document.getElementById("righteye").style.border ="4px yellow dotted";
// document.getElementById("leftarm").style.backgroundColor ="#ff00ff";
// document.getElementById("body").style.color = "#ff0000";
// document.getElementById("head").style.borderTop= "5px black solid"
// document.getElementById("head").style.transform ="rotate(-15deg)";
// document.getElementById("nose").style.borderRadius ="15px";
// document.getElementById("rightarm").style.backgroundColor="green";
// document.getElementById("mouth").style.backgroundColor= "pink";

let rightEye = document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown);

let leftEye = document.getElementById("lefteye");
leftEye.addEventListener("click", moveUpDown);

let leftArm = document.getElementById("leftarm");
leftArm.addEventListener("click", moveRightLeft);

let body = document.getElementById("body");
body.addEventListener("click", moveRightLeft);

function moveUpDown(e) {
    let robotPart = e.target;
    let top = 0;
    let animation = setInterval(frame, 10);

    function frame() {
        robotPart.style.top = top + "%";
        top++;
        if (top === 20) {
            clearInterval(animation);

        }
    }
}

// function moveRightLeft(e){
//     let robotPart = e.target;
//     let left = 0;

//     let animation = setInterval(frame, 71);

//     function frame(){
//         robotPart.style.left = left +"%";
//         left++;
//         if (left === 70){
//             clearInterval(animation);
//         }
//     }
// }

// function moveRightLeft(e) {
//     let robotPart = e.target;
//     let left = 0;

//     let animation = setInterval(frame, 35);

//     function frame() {
//         robotPart.style.left = left + "%";
//         left++;
//         if (left === 26) {
//             clearInterval(animation);
//         }
//     }
// }