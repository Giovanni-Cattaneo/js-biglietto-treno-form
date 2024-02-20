console.log("hello");

const inputAge = document.getElementById("age"); // input età

const inputDistance = document.getElementById("distance"); // input distanza

const inputIdentity = document.getElementById("identity")

const button = document.getElementById("btn");

button.addEventListener("click", myFunction)

let juniorDiscount = 0.8

let seniorDiscount = 0.6

function myFunction(){
    console.log (Number(inputAge.value)) ; // valore età
    console.log (Number(inputDistance.value)); // valore distanza
    let userAge = Number(inputAge.value) ;
    let userDistance = Number(inputDistance.value) ;
    let tripPrice = userDistance * 0.21;

    if (userAge < 18) {
        tripPrice *= juniorDiscount
    } else if (userAge > 65){
        tripPrice *= seniorDiscount
    }

    tripPrice = tripPrice.toFixed(2);

    console.log(inputIdentity.value, tripPrice);

    document.getElementById("price").innerHTML = tripPrice;
}
