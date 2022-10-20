import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/*2 way binding*/}
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />

        {/* This is another wayto output conditional content. 
        Best practice is to do so outside of return to keep JSX lean
        This list filtering logic was moved to ExpensesList.js        
        {filteredExpenses.length === 0 && <p>No expenses found</p>}

        {filteredExpenses.length > 0 && //the && is a JS shortcut which runs the following code if the first condition is true
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}*/}

        {/* One way to output conditional content
        {filteredExpenses.length === 0 ? (
          <p>No expenses found</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}*/}
      </Card>
    </div>
  );
}

export default Expenses;
