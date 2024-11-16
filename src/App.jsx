import React from "react";
import "./styles/main.css";
import { Welcome, StepOne, StepTwo, StepThree, StepFour, Thanks } from "./pages/index";

export const App = () => {
  return (
    <div className="App">

      <Welcome />
      <StepOne />
      <StepTwo />
      <StepThree />
      <StepFour />
      <Thanks />
    </div>
  );
};
