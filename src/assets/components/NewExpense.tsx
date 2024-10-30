import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import ExpenseForm from "./ExpenseForm";

function NewExpense() {
  const [category, setCategory] = useState('')
  const [item, setItem] = useState('')
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [logDate, setLogDate] = useState('')
  const userId = localStorage.getItem('userId')
  const navigate = useNavigate()


  const categories = [
    { value: 'food', name: 'Food'},
    { value: 'socialLife', name: 'Social Life'},
    { value: 'pets', name: 'Pets'},
    { value: 'transportation', name: 'Transportation'},
    { value: 'culture', name: 'Culture'},
    { value: 'household', name: 'Household'},
    { value: 'apparel', name: 'Apparel'},
    { value: 'beauty', name: 'Beauty'},
    { value: 'health', name: 'Health'},
    { value: 'education', name: 'Education'},
    { value: 'gift', name: 'Gift'}
  ]

  useEffect(() => {
    if (!userId) {
      alert('Please log in again.');
      navigate('/');
    }
  }, [userId, navigate]);

  return(
    <>
      <div>
        <ExpenseForm userId={userId} category={category} setCategory={setCategory} categories={categories} item={item} setItem={setItem} description={description} setDescription={setDescription} amount={amount} setAmount={setAmount} logDate={logDate} setLogDate={setLogDate} navigate={navigate} />
      </div>
    </>
  )
}

export default NewExpense