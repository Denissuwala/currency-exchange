{
    const calculateResult = (pln, currency) =>{
        return pln / currency;

    };

    const updateResultText = (result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = result.toFixed(2);
    };
        
    const onFormInput = (event) => {
        event.preventDefault();
    
        const plnElement = document.querySelector(".js-pln");
        const currencyElement = document.querySelector(".js-currency");

        const pln = plnElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(pln, currency);

        updateResultText(result);

        const changeCurrencyName = () => {
            
            const euroElement = document.querySelector(".js-euro");
            const usdElement = document.querySelector(".js-usd");
            const currencyNameElement = document.querySelector(".js-currencyName");
            

               if (currencyElement.value === usdElement.value) {
                    currencyNameElement.innerText = "USD";
            } else if (currencyElement.value === euroElement.value) {
                currencyNameElement.innerText = "EUR";
            } else {
                currencyNameElement.innerText = "GBP";
            }
            
        };
    
        changeCurrencyName();
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("input", onFormInput);
    };
         init();
}



