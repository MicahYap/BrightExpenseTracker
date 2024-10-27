import { useState, useEffect } from "react";

function NewExpense() {
  const [category, setCategory] = useState('')
  const [item, setItem] = useState('')
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')


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

  const onSave = (e) => {
    e.preventDefault()
    //post mo to sa backend
  }

  return(
    <>
      <div>
        <form>
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

          <button onClick={onSave}>Save</button>

        </form>
      </div>
    </>
  )
}

export default NewExpense