import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  let calcBmi = (event) => {
    // prevent submitting
    event.preventDefault();

    if (weight === 0 || height === 0 || weight === '' || height === '') {
      alert('Please enter a valid weight and height');
    } else {
      // BMI formula: weight (kg) / [height (m)]^2
      // Height is in cm, so divide by 100
      const heightInMeters = height / 100;
      let bmiValue = (weight / (heightInMeters * heightInMeters));
      setBmi(bmiValue.toFixed(1)); 
      /* .tofixed(1)); 
      means Keep only 2 digits after the decimal point.*/

      // Logic for message
      if (bmiValue < 18.5) {
        setMessage('You are underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setMessage('You are a healthy weight');
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setMessage('You are overweight');
      } else {
        setMessage('You are obese');
      }
    }
  };

  let reload = () => {
    setWeight('');
    setHeight('');
    setBmi('');
    setMessage('');
  };

  return (
    <div className="app">
      <div className="container">
        <h2 className="title">BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div className="input-group">
            <label>Weight (kg)</label>
            <input 
              value={weight} 
              onChange={(e) => setWeight(e.target.value)} 
              placeholder="Enter your weight" 
              type="number"
            />
          </div>
          <div className="input-group">
            <label>Height (cm)</label>
            <input 
              value={height} 
              onChange={(e) => setHeight(e.target.value)} 
              placeholder="Enter your height"
              type="number" 
            />
          </div>
          <div className="button-group">
            <button className="btn submit-btn" type="submit">Submit</button>
            <button className="btn reload-btn" onClick={reload} type="button">Reload</button>
          </div>
        </form>

        {bmi && (
          <div className="result">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
