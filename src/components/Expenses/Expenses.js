import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpensesList from './expensesList';
import ExpenseChart from './ExpensesChart';

export default function Expenses(props) {
  const [selectedYearValue, setSelectedYearValue] = useState('2023');

  const selectedYear = (value) => {
    setSelectedYearValue(value);
  };
  const filteredExpenses = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === selectedYearValue;
  });

  return (
    <Card className='expenses'>
      <ExpenseFilter selected={selectedYearValue} onSelectYear={selectedYear} />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}
