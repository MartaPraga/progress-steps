import styles from "./App.module.css";
import { useEffect, useState } from "react";
import Circle from "./components/Circle/Circle";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);

  const STEPS = [1, 2, 3, 4];

  function handleClickNext() {
    setCurrentStep((prevState) => {
      const nextStep = prevState + 1;
      setDisablePrev(false);

      if (nextStep >= STEPS.length) {
        setDisableNext(true);
        return STEPS.length;
      } else {
        return nextStep;
      }
    });
  }

  const handleClickPrev = () => {
    setCurrentStep((prevState) => {
      prevState = prevState - 1;
      setDisableNext(false);
      if (prevState <= 1) {
        setDisablePrev(true);
        return 1;
      } else {
        return prevState;
      }
    });
  };

  useEffect(() => {
    console.log("currentStep", currentStep);
    console.log("active", Circle.active);
  }, [currentStep]);

  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <div
          className={styles.line}
          style={{
            width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%`,
          }}
        ></div>
        {STEPS.map((step) => {
          return (
            <Circle key={step} number={step} active={step <= currentStep} />
          );
        })}
      </div>
      <button
        onClick={() => handleClickPrev(currentStep)}
        className={styles.btn}
        disabled={disablePrev}
      >
        Prev
      </button>
      <button
        onClick={() => handleClickNext(currentStep)}
        className={styles.btn}
        disabled={disableNext}
      >
        Next
      </button>
    </div>
  );
}

export default App;
