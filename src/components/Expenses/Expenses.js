import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';

export default function Expenses(props) {
  const [selectedYearValue, setSelectedYearValue] = useState('2023');
  const selectedYear = (value) => {
    setSelectedYearValue(value);
  };
  console.log(selectedYearValue);
  return (
    <Card className='expenses'>
      <ExpenseFilter selected={selectedYearValue} onSelectYear={selectedYear} />
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
}
