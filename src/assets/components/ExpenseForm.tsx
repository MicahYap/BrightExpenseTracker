import { FormEvent } from 'react';
import axios from 'axios';
import {API_URL} from '../../constants/constants'

interface Category {
  value: string;
  name: string;
}

interface ExpenseFormProps {
  userId: string | null;
  category: string;
  setCategory: (value: string) => void;
  categories: Category[];
  item: string;
  setItem: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  amount: string;
  setAmount: (value: string) => void;
  logDate: string;
  setLogDate: (value: string) => void;
  navigate: (path: string) => void;
}

function ExpenseForm ({userId, category, setCategory, categories, item, setItem, description, setDescription, amount, setAmount, logDate, setLogDate, navigate}: ExpenseFormProps) {

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
      await axios.post(`${API_URL}/users/${userId}/expenses`, {expense: expenseData})
      navigate(`/homepage/${userId}`)
    }catch(error) {
      alert('Error creating expense')
    }
  }

  return(
    <>
      <form onSubmit={onSubmit}>

        <label>Date:</label>
        <input
            type='date'
            value={logDate}
            onChange={(e) => setLogDate(e.target.value)}
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
    </>
  )
}

export default ExpenseForm