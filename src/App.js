import React, { useState } from 'react';
import Card from './components/UI/Card';
import NewExpense from './components/NewExpense/NewExpense';
import ExpenseFilter from './components/Expenses/ExpenseFilter';
import ExpensesList from './components/Expenses/ExpensesList';
import ExpenseChart from './components/Expenses/ExpenseChart';

const initial_expenses = [
  { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14) },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  { id: 'e3', title: 'Car Insurance', amount: 296.67, date: new Date(2021, 2, 28) },
  { id: 'e4', title: 'New Desk(Wooden)', amount: 450, date: new Date(2021, 5, 12) },
];
const App = () => {

  const [filterYear, setFilteredYear] = useState('2021');
  const [expenses, setExpenses] = useState(initial_expenses);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => { return [expense, ...prevExpenses] });
  }


  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filterExepenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Card className='expenses'>
        <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
        <ExpenseChart expenses={filterExepenses} />
        <ExpensesList items={filterExepenses} />
      </Card>
    </div>
  );
}

export default App;
