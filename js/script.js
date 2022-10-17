let plnElement = document.querySelector(".js-pln");
let currencyElement = document.querySelector(".js-currency");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");
let currencyNameElement = document.querySelector(".js-currencyName");
let euroElement = document.querySelector(".js-euro");
let usdElement = document.querySelector(".js-usd");
let gbpElement = document.querySelector(".js-gbp");

formElement.addEventListener("input", (event) => {
    event.preventDefault();``
 
    let pln = plnElement.value;
    let currency = currencyElement.value;

    let result = pln / currency;

    resultElement.innerText = result.toFixed(2) ;

    if (currencyElement.value === euroElement.value) {
        currencyNameElement.innerText = "EUR";
    } else if (currencyElement.value === usdElement.value) {
        currencyNameElement.innerText = "USD";
    } else {
        currencyNameElement.innerText = "GBP";
    }

});

