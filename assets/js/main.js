console.log("hello");

const userAge = document.getElementById(Number("age"));

const userDistance = document.getElementById(Number("distance"));

const button = document.getElementById("btn");

button.addEventListener("click", myFunction)

function myFunction(){
    console.log(userAge, userDistance);
}