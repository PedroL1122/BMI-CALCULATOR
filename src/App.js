import { useState } from "react";

export default function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [bmiResult, setBmiResult] = useState(null);

  const [status, setStatus] = useState("");

  function calculateBMI() {
    let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
    setBmiResult(bmi);

    let bmiStatus = getStatus(bmi);

    setStatus(bmiStatus);

    setHeight("");
    setWeight("");
  }

  function getStatus(bmi) {
    if (bmi < 18.5) return "Underweight";
    else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
    else if (bmi >= 25 && bmi < 29.9) return "Overweight";
    else return "Obese";
  }

  let reload = () => {
    window.location.reload()
  }

  return (
    <div className="App">
      <form>
        <h1 className="text-center mb-4 text-xl"> BMI Calculator</h1>
        <div className="mb-4">
          <label
            for="username"
          >
            Height
          </label>
          <input
            id="Height "
            type="text"
            placeholder="Height in cm"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Weight
          </label>
          <input
            id="Weight"
            type="Weight in kg"
            placeholder="Weight in cm"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="btn"
            type="button"
            onClick={calculateBMI}
          >
            Calculate BMI
          </button>

          <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
        </div>
        {bmiResult && (
          <div className="mt-4">
            <p>Your BMI is: {bmiResult} </p>
            <p >You are currently: {status}</p>
          </div>
        )}
      </form>
    </div>
  );
}