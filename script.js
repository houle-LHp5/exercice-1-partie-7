
let numberOne = document.getElementById("numberOne");
let numberTwo = document.getElementById("numberTwo");
let motherNumber = document.getElementById("motherNumber");


function myFunction() {
    let result = numberOne.value * numberTwo.value;
    motherNumber.innerHTML += `<button type="button" class="btn btn-primary btn-lg" id="myButton">${result}</button>`;
}