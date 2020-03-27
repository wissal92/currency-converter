const currencyOne = document.getElementById('currency-one');
const amountOne = document.getElementById('amount-one');
const currencyTwo = document.getElementById('currency-two');
const amountTwo = document.getElementById('amount-two');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');


function calculate(){
    const currency_one = currencyOne.value;
    const currency_two = currencyTwo.value;
  
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
      .then(res => res.json())
      .then(data => {
          console.log(data.rates)
          const rateData = data.rates[currency_two];
          rate.innerText = `1 ${currency_one} = ${rateData} ${currency_two}`;
          amountTwo.value = (amountOne.value * rateData).toFixed(2);
      })
}

// Event listeners
currencyOne.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
currencyTwo.addEventListener('change', calculate);
amountTwo.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
    calculate();
})

calculate();