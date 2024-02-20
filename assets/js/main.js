console.log("hello");

const inputAge = document.getElementById("age"); // input età

const inputDistance = document.getElementById("distance"); // input distanza

const button = document.getElementById("btn");

button.addEventListener("click", myFunction)

function myFunction(){
    console.log (Number(inputAge.value)) ; // valore età
    console.log (Number(inputDistance.value)); // valore distanza
    let userAge = Number(inputAge.value) ;
    let userDistance = Number(inputDistance.value) ;
    let tripPrice = userDistance * 0.21;

    if (userAge < 18) {
        tripPrice *= 0.8
    } else if (userAge > 65){
        tripPrice *= 0.6
    }

    tripPrice = tripPrice.toFixed(2);

    console.log(tripPrice);

    document.getElementById("price").innerHTML = tripPrice;
}
