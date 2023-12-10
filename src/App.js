import React, { useState } from "react";
import './App.css';
import Header from './components/Header';
import AddExpenseButton from './components/AddExpenseButton';
import AddIncomeButton from './components/AddIncomeButton';
import IncomeDisplay from './components/IncomeDisplay';
import MovingBallGif from "./components/MovingBallGif";
import Cube from "./components/Cube";

function App() {

    // State to track whether the "Add Income" button has been clicked
    const [showIncomeInput, setShowIncomeInput] = useState(false);
    // State to track whether the "Add Expense" button has been clicked
    const [showExpenseInput, setShowExpenseInput] = useState(false);

    // State to store the value entered in the income input field
    const [incomeValue, setIncomeValue] = useState(0);
    const [previousInteractions, setPreviousInteractions] = useState([]);
    
    // Function to handle the "Add Income" button click event
    const handleAddIncomeClick = () => {

        
        // When the "Add Income" button is clicked, show the input fields
        setShowIncomeInput(true);
        
    };

    const handleAddExpenseClick = (amount) => {
        setShowExpenseInput(true);
        setPreviousInteractions([
          ...previousInteractions,
          { type: "expense", amount: parseFloat(amount) }
        ]);
    };

    const handleAddIncome = (amount) => {
        setIncomeValue(incomeValue + amount);
        setPreviousInteractions([...previousInteractions, { type: "income", amount }]);
    };
    

      

  return (
    <div className="App">
        <Header/>
        
        <AddIncomeButton 
            showIncomeInput= {showIncomeInput} 
            setShowIncomeInput={setShowIncomeInput} 
            incomeValue={incomeValue} 
            setIncomeValue={setIncomeValue} 
            showExpenseInput={showExpenseInput}
            handleAddIncome={handleAddIncome}
        />
        <AddExpenseButton 
            showIncomeInput={showIncomeInput}
            incomeValue={incomeValue}
            showExpenseInput={showExpenseInput}
            setIncomeValue={setIncomeValue}
            setShowExpenseInput={setShowExpenseInput}
            handleAddExpenseClick={handleAddExpenseClick}
        />
        
        <IncomeDisplay incomeValue={incomeValue}  
        previousInteractions={previousInteractions}
        />

        <MovingBallGif />

        <Cube />
        
        
    </div>
  );
}

export default App;
