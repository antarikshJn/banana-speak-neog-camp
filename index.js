// put a textarea input tag.
// reference that in javascript.
// read the value of the tag. You can do this only inside event. There are two events which you can listen to
// onchange on textarea, we will learn this method in next class while doing React
// onclick on button, let's do this now.
// console this value to complete the exercise. refresh and try few more times.

// project
var txtArea = document.querySelector("#txt-Box");
var button = document.querySelector("button");
button.addEventListener("click", valueFetch);
function valueFetch(){
    console.log(txtArea.value);
}

console.log("translator :", document.querySelector("input[name='translator']"))















console.log(txtArea, button)