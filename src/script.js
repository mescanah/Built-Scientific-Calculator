document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM is fully loaded and parsed.');
    const display = document.getElementById('calc-display');
    
    const buttons = document.getElementsByClassName('btn')
  
      
      let y = display.value
      let n = display.value
  
    let currentValue = "";
    function evaluateResult(){
      console.log('currentValue:', currentValue)
      const convertedValue = currentValue.replace("x", "*")
      
      .replace("÷", "/")
      .replace('%', '*0.01')
      .replace('sin', 'Math.sin')
      .replace('cos', 'Math.cos')
      .replace('ln', 'Math.log')
      .replace('π', 'Math.PI')
      .replace('log', 'Math.log10')
      .replace('e', 'Math.E')
      .replace('tan', 'Math.tan')
      .replace('√', 'Math.sqrt')
      .replace('EXP', 'Math.exp')
      .replace('Inv', '1/value')
      .replace("yⁿ", "Math.pow(y,n)")
      .replace('EXP', 'Math.exp')
      .replace("Rad", "(45 * (Math.PI / 180))")
      .replace('Ans', 'value')
    
     const result = eval(convertedValue);
     currentValue = result.toString();
     display.value = currentValue;
    }
    
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      button.addEventListener('click', function(){
        const value = button.innerText;
  
       try{
        if (value == "AC"){
          currentValue="";
          display.value = currentValue; 
        }  else if(value == "="){
         evaluateResult();
      
  
        }  else if(value == "Ans"){
          previousValue = ""
           display.value = previousValue;
  
        } else {
          currentValue += value;
          console.log('currentValue:', currentValue);
          display.value = currentValue
        } 
        } catch(error) {
         
          console.error(error);
          currentValue = "Error";
          display.value = currentValue;
         }
         
      })
      
    }
  
           });