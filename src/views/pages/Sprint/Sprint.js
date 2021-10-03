import React, { useState } from 'react';

import NewExpense from './NewExpense/NewExpense';
import Expenses from './Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Sprint 1',
    amount: 12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'Sprint 2', amount: 5, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Sprint 3',
    amount: 8,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Sprint 4',
    amount: 10,
    date: new Date(2021, 5, 12),
  },
];

const Sprint = () => {

  const payload = {
    "operation": "list",
    "payload": {
      "TableName": "SPRINT_TBL"
    }
  }

  async function addMovieHandler(movie) {
    const response = await fetch('https://de0grvoj8l.execute-api.us-east-2.amazonaws.com/dev/hr-performance-tracking', {
      method: 'POST',
      body: JSON.stringify(payload),
      // headers: {
      //   'Content-Type': 'application/json',
      //   'Accept': '*'
      // }
    });
    const data = await response.json();
    console.log(data);
  }

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      <button onClick={addMovieHandler}>Fetch Sprint</button>
    </div>
  );
};

export default Sprint;

