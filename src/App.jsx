import Header from "./components/Header.jsx";
import MainInputs from "./components/MainInputs.jsx";
import Results from "./components/Results.jsx";


import { useState } from "react";

function App() {
    const [valueInput, setValueInput] = useState({
      initialInvestment:10000,
      annualInvestment:1200,
      expectedReturn:6,
      duration:10,
    });

    function handleInputs(inputId, newInput){
      setValueInput(prevInput =>{
          return {
              ...prevInput,
              [inputId]:+newInput
          };
      })
    }

      const positive = valueInput.duration >= 1;


  return (
    <>
      <Header/>
      <MainInputs handleInputs={handleInputs} valueInput={valueInput}/>
      {!positive && (<p className="center">Add positive number!</p>)}
      { positive && <Results valueInput={valueInput}/> }
    </>


  )
}

export default App
