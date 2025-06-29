import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
import { useState } from "react";

const initialValues = { initialInvestment: 10000, annualInvestment: 1200, expectedReturn: 6, duration: 10 };

function App() {
  const [userInput, setUserInput] = useState(initialValues);

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />;
      <UserInput onChangeInput={handleChange} userInput={userInput} />
      {!inputIsValid && <p className="center">Please enter a duration greater than 0.</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
