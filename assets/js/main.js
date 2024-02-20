console.log("hello");

const userAge = document.getElementById("age");

const userDistance = document.getElementById("distance");

console.log (Number(userAge), Number(userDistance));

const button = document.getElementById("btn");

button.addEventListener("click", myFunction)

function myFunction(){
    console.log (Number(userAge.value)) ;
    console.log (Number(userDistance.value));
}

if ( userAge.value < 18){
    console.log("hello"); 
}
 


