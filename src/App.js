import React from 'react';
import ExpenseItem from './components/Expenses/ExpenseItem';
import Card from './components/UI/Card';

const App = () => {

  const expenses = [
    { id: 'e1', title: 'Toilet Paper', amount: '$94.12', date: new Date(2020, 7, 14) },
    { id: 'e2', title: 'New TV', amount: '$799.49', date: new Date(2021, 2, 12) },
    { id: 'e3', title: 'Car Insurance', amount: '$296.67', date: new Date(2021, 2, 28) },
    { id: 'e4', title: 'New Desk(Wooden)', amount: '$450', date: new Date(2021, 5, 12) },
  ];

  return (
    <div className="App">
      <h2>Let's get started!</h2>
      <Card className='expenses'>
        {expenses.map((expense) => { return <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} /> })}
      </Card>
    </div>
  );
}

export default App;
