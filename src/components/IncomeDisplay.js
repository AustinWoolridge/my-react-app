import React from "react";

function IncomeDisplay({ incomeValue, previousInteractions }) {
  return (
    <div className="income-display">
      <h2>Income Value:</h2>
      <p>{incomeValue}</p>

      <h2>Previous Interactions:</h2>
      <ul>
        {previousInteractions.map((interaction, index) => (
          <li key={index} className={interaction.type === "expense" ? "expense" : "income"}>
            {interaction.type === "expense" ? "-" : "+"} {interaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IncomeDisplay;
