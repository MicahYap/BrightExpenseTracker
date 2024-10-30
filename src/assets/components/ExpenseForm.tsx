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
    <div>
      <b className='text-pink-100 text-2xl'>Create New Expense</b>
      <form onSubmit={onSubmit} className="flex flex-col space-y-4 mt-6">

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
          type='number'
          value={amount}
          onChange={(e)=> setAmount(e.target.value)}
        >
        </input>

        <button 
          type='submit'
          className="px-4 py-2 bg-pink-500 text-white font-semibold rounded shadow hover:bg-pink-400 transition-colors duration-200 w-40 flex justify-center self-center"
        >
          Save
        </button>

      </form>
    </div>
  )
}

export default ExpenseForm