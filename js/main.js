let bill = document.querySelector('.calculator__options--bill');
let billNumber = parseInt(bill.value);

let people = document.querySelector('.calculator__people--bill');
let peopleNumber = parseInt(people.value);

let buttons = document.querySelectorAll('.btns__button');

let tipAmount = document.querySelector('.results__tip-value');
let totalResul = document.querySelector('.results__total-value');

let tipValue = 5;

let alert = document.querySelector('#alert');

buttons.forEach(element =>{
  element.addEventListener('click', (event)=>{
    // Elimino la clase selected a todos los botones
    buttons.forEach(element =>{
      element.classList.remove('btns__button--selected');
    });
    // Agrego la clase selected al botton seleccionado
    element.classList.add('btns__button--selected');

    tipValue = parseInt(event.target.innerText.slice(0,-1));
    calculateTip();
  });
});

// Actualizando custom
let custom = document.querySelector('.btns__custom');
custom.addEventListener('input', ()=>{
  tipValue = parseInt(custom.value);
  if(isNaN(tipValue)){

  }else{
    calculateTip();
  }
});

// Actualizando el bill
bill.addEventListener('input', () => {
  billNumber = parseFloat(bill.value);
  calculateTip();
});

// Actualizando people
people.addEventListener('input', () =>{
  peopleNumber = parseFloat(people.value);
  if(peopleNumber == 0 || isNaN(peopleNumber)){
    people.style.borderColor='rgb(164,68,68)';
    alert.classList.add('error');
  }else{
    people.style.borderColor='hsl(189,41%,97%)';
    alert.classList.remove('error');
    calculateTip();
  }
})

function calculateTip(){
  // Calculo tip amount
  tipAmount.innerText = '$' + ((billNumber * tipValue / 100) / peopleNumber).toFixed(2);
  totalResul.innerText = '$' +(((billNumber * tipValue / 100) + billNumber)/ peopleNumber).toFixed(2);
}

// reset
let reset = document.querySelector('.results__reset');
reset.addEventListener('click',()=>{
  bill.value = 0;
  billNumber = 0;
  people.value = 5;
  peopleNumber = 5;
  custom.value = 'Custom';
  calculateTip();
});