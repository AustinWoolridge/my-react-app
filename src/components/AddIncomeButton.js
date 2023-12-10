import React, { useState } from "react";

function AddIncomeButton({showIncomeInput, setShowIncomeInput, incomeValue, setIncomeValue, showExpenseInput, handleAddIncome}) {

    const [newIncomeValue, setNewIncomeValue] =useState("");
    
    const handleSaveIncome = () => {
        const updatedIncomeValue = parseFloat(incomeValue) + parseFloat(newIncomeValue);

        setIncomeValue(updatedIncomeValue);

        setShowIncomeInput(false);
    }

    return (
        <div className="button-container">
            {!showIncomeInput  ? (
                <button className="myButton" onClick= { () => setShowIncomeInput(true)}>Add Income</button>
            ) : (
                <div>
                        <input 
                            type="number"
                            placeholder="Enter income amount"
                            value={newIncomeValue}
                            onChange={(e) => setNewIncomeValue(e.target.value)}
                        />
                        <button className="myButton" onClick={() => handleSaveIncome(newIncomeValue)}>Save</button>
                </div>
            )}


        </div>
    )
}

export default AddIncomeButton;