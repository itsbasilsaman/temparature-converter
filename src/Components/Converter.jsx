import React, { useState } from "react";

function Converter() {

  const [celsius,setCelsius] = useState('')
  const [fahrenheit,setFahrenheit] = useState('')
  const [celsiusToFahrenheit,setCelsiusToFahrenheit] = useState('')
  const [fahrenheitToCelsius,setFahrenheitToCelsius] = useState('')
 

 
  const setCelsiusValue = (event) => {
    let celsiusValue = event.target.value
    if(!isNaN(celsiusValue) && celsiusValue.trim() !== ''){
      setCelsius(celsiusValue)
      setCelsiusToFahrenheit(`${( celsius * 9/5) + 32} °F`);
    } else {
      setCelsiusToFahrenheit('')
    }
   
    
  }

  const setFahrenheitValue = (event) => {
    let fahrenheitValue = event.target.value
    if(!isNaN(fahrenheitValue) && fahrenheitValue.trim() !== ''){
      setFahrenheit(fahrenheitValue)
      setFahrenheitToCelsius(`${(((fahrenheit - 32) * 5) / 9).toFixed(2)} °C`)
    } else {
      setFahrenheitToCelsius('')
    }
  }

  const valueErased = () => {
    setCelsiusToFahrenheit('')
    setFahrenheitToCelsius('')
     
  }

  

  return (
    <main>
      <section>
        <div className="input-section">
          <p>Celsius </p>
          <input type="text" onChange={setCelsiusValue}     />
          <div className="fahrenheit-answer">{celsiusToFahrenheit}</div>
        </div>
        <div>
          <span className="material-symbols-outlined" onClick={valueErased}>compare_arrows</span>
        </div>
        <div className="input-section">
          <p>Fahrenheit </p>
          <input type="text" onChange={setFahrenheitValue} />
          <div className="celsius-answer">{fahrenheitToCelsius}</div>
        </div>
       
      </section>
    </main>
  );
}

export default Converter;
