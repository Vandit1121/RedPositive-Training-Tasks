import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [open, setOpen] = useState(false);
    const SaveExpenseData = (enteredData) => {
        const expenseData = {
            ...enteredData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
        setOpen(false);
    };

    const openClickHandler = () => {
        setOpen(true);
    }

    const closeClickHandler = () => {
        setOpen(false);
    }



    return (
        <div className="new-expense">
            {open ?
                <ExpenseForm onSaveExpenseData={SaveExpenseData} onCancel={closeClickHandler} /> :
                <button onClick={openClickHandler}>Add Expense</button>}
        </div>
    );
};

export default NewExpense;