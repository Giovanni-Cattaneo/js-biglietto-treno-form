console.log("hello");

const inputAge = document.getElementById("age"); // input età

const inputDistance = document.getElementById("distance"); // input distanza

const inputIdentity = document.getElementById("identity")

const button = document.getElementById("btn");

button.addEventListener("click", myFunction)

let kmPrice = 0.21

let juniorDiscount = 0.8

let seniorDiscount = 0.6

function myFunction(){
    console.log (inputAge.value) ; // valore età
    console.log (inputDistance.value); // valore distanza
    let userAge = (inputAge.value) ;
    let userDistance = (inputDistance.value) ;
    let tripPrice = userDistance * kmPrice;

    if (userAge === "minors") {
        tripPrice *= juniorDiscount
    } else if (userAge === "seniors"){
        tripPrice *= seniorDiscount
    }

    tripPrice = tripPrice.toFixed(2);

    console.log(inputIdentity.value, tripPrice);

    document.getElementById("price").innerHTML = tripPrice;
}
