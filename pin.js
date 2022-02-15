function getPin(){
    const pin =  Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        // console.log('got 3 digit calling again', pin);
        return getPin();
    }
}
function generatePin(){
   const pin = getPin();
   document.getElementById('display-pin').value = pin;
    
}
document.getElementById('key-pad').addEventListener('click', function (event){
   const number = event.target.innerText;
   const calcInput = document.getElementById('show-numbers');
   if(isNaN(number)) {
       if(number == 'C') {
           calcInput.value = '';
       }
   }
   else{
    const previousNumber = calcInput.value;
   const newNumber = previousNumber + number;
   calcInput.value = newNumber;
   }
});
function verifyPin(){
    const pin =  document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('show-numbers').value;
    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailedError = document.getElementById('pin-failed');
    if(pin == typedNumbers){
        pinSuccessMessage.style.display = 'block';
        pinFailedError.style.display = 'none'
    }
    else{
        pinFailedError.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
}


