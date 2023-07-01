import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const expenseSaveHandler = (expenseData) => {
    const recievedExpenseNewData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onExpenseDataSave(recievedExpenseNewData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditHandler = () => {
    setIsEditing(false);
  };

  return (
    <div div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onExpenseFormSave={expenseSaveHandler}
          onCancel={stopEditHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
