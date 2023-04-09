import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense= (props) =>{

    const SaveExpenseData = (enteredData)=>{
        const expenseData = {
            ...enteredData,
            id:Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm  onSaveExpenseData={SaveExpenseData} />
        </div>
    );
};

export default NewExpense;