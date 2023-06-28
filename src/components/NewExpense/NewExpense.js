import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const expenseSaveHandler = (expenseData) => {
    const recievedExpenseNewData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onExpenseDataSave(recievedExpenseNewData);
  };
  return (
    <div div className='new-expense'>
      <ExpenseForm onExpenseFormSave={expenseSaveHandler} />
    </div>
  );
};
export default NewExpense;
