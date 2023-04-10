import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const ExpensesList = (props) => {

    if (props.items.length === 0) {
        return <h2 className="expense-list__fallback">Found no expenses.</h2>
    }

    return (
        <Card>
            <ul className="expenses-list">
                {props.items.map((expense) => { return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} /> })}
            </ul>
        </Card>
    );
};

export default ExpensesList;