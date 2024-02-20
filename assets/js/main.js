console.log("hello");

const userAge = document.getElementById("age").value;

const userDistance = document.getElementById("distance").value;

console.log (Number(userAge), Number(userDistance));

const button = document.getElementById("btn");

button.addEventListener("click", myFunction)

function myFunction(){
    console.log(Number(userAge), Number(userDistance));
}

if ( userAge.value < 18){
    console.log("hello"); 
}
 


