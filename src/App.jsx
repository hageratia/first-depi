import React, { useState } from "react";
import "./App.css";

const steps = [
  { id: 1, message: "this is my first message" },
  { id: 2, message: "this is my second message" },
  { id: 3, message: "this is my third message" },
];

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      <div className="App mt-5">
        <div className="steps ">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`step ${index <= currentStep ? "active" : ""}`}
            >
              {step.id}
            </div>
          ))}
        </div>
        <div className="message">
          <h2>{steps[currentStep].message}</h2>
          <h3>{currentStep + 1}</h3>
        </div>
        <div className="buttons">
          <button onClick={handlePrevious} disabled={currentStep === 0}>
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentStep === steps.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
