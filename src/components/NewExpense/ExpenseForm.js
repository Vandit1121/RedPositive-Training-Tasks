import React,{useState} from "react";

const ExpenseForm = (props) => {

    const [title,setTitle] = useState('');
    const [amount,setAmount] = useState('');
    const [date,setDate] = useState('');

    const titleChangeHandler = (e) =>{
        setTitle(e.target.value);
    };

    const amountChangeHandler = (e) =>{
        setAmount(e.target.value);
    };

    const dateChangeHandler = (e) =>{
        setDate(e.target.value);
    };

    const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData = {
            title:title,
            amount: amount,
            date:new Date(date)
        };
        props.onSaveExpenseData(expenseData);
        setTitle('');
        setAmount('');
        setDate('');

    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" value={title} onChange={titleChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" value={amount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" min="2019-01-01" value={date} max="2022-12-31" onChange={dateChangeHandler} />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button onClick={props.onCancel}>Close</button>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </div>
    );
};

export default ExpenseForm;