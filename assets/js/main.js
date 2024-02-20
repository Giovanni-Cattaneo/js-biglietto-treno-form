console.log("hello");

const userAge = document.getElementById("age");

const userDistance = document.getElementById("distance");

console.log (Number(userAge), Number(userDistance));

const button = document.getElementById("btn");

button.addEventListener("click", myFunction)

function myFunction(){
    console.log(Number(userAge.value), Number(userDistance.value));
}

if (console.log(Number(userAge.value)) < 18){
    document.getElementById("price").innerHTMl("ciaone") 
}

