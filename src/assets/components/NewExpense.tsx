import { useState, useEffect } from "react";
import axios from 'axios';
import {API_URL} from '../../constants/constants'
import { useNavigate } from 'react-router-dom'

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
      navigate('/'); // Redirect to login page if no userId is found
    }
  }, [userId, navigate]);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      alert('User not logged in');
      return;
    }

    const expenseData = {
      category_name: category,
      item: item,
      description: description,
      amount: amount,
      date: logDate,

    }
    try{
      const response = await axios.post(`${API_URL}/users/${userId}/expenses`, {expense: expenseData})
      navigate(`/homepage/${userId}`)
    }catch(error) {
      alert('Error creating expense')
    }
  }

  return(
    <>
      <div>
        <form onSubmit={onSubmit}>

          <label>Date:</label>
          <input
              type='date'
              value={logDate}
              onChange={(e) => setLogDate(e.target.value)}
              // max= {new Date().toISOString().split('T')[0]}
            />
          <label>Category: </label>
          <select 
            id = "category"
            value = {category}
            onChange={(e)=> setCategory(e.target.value)}

          >
            <option value=''>Select a category</option>
            {categories.map(category => (
              <option key={category.value} value={category.value}>
                {category.name}
              </option>
            ))}
          </select>

          <label>Item: </label>
          <input
            type='text'
            value={item}
            onChange={(e)=> setItem(e.target.value)}
          >
          </input>

          <label>Description: </label>
          <input
            type='text'
            value={description}
            onChange={(e)=> setDescription(e.target.value)}
          >
          </input>

          <label>Amount: </label>
          <input
            type='text'
            value={amount}
            onChange={(e)=> setAmount(e.target.value)}
          >
          </input>

          <button type='submit'>Save</button>

        </form>
      </div>
    </>
  )
}

export default NewExpense