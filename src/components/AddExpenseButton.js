import React, { useState } from "react";

function AddExpenseButton({showIncomeInput, incomeValue, showExpenseInput, setIncomeValue, setShowExpenseInput, handleAddExpenseClick}) {

    const [expenseValue, setExpenseValue] = useState("");
    

    const handleAddExpense = () => {
        const newIncomeValue = parseFloat(incomeValue) - parseFloat(expenseValue);

        setIncomeValue(newIncomeValue);
        setShowExpenseInput(false);
    };

    return (
        <div className="button-container">
            {!showExpenseInput ? (<button className="myButton" onClick={ () => setShowExpenseInput(true)}>Add Expense</button>
                
            ) : (
                <div>
                        <input 
                            type="number"
                            placeholder="Enter income amount"
                            value={expenseValue}
                            onChange={(e) => setExpenseValue(e.target.value)}
                        />
                        <button className="myButton" onClick={() => handleAddExpense(expenseValue)}>Save</button>
                </div>
            )}
        </div>
    )
}

export default AddExpenseButton;