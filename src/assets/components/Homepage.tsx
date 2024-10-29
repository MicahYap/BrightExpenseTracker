import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import ExpenseHistory from "./ExpenseHistory";
import {API_URL} from '../../constants/constants'
import axios from "axios";

function Homepage() {
 const navigate = useNavigate()

 const handleLogout = async() => {
  try{
    await axios.delete(`${API_URL}/logout`)
    navigate('/')

  }catch (error){
    alert('Error logging out')
  }

 }

 return (
  <div>
    <div>
      <span> Bright Expense Tracker </span>
      <button onClick={handleLogout}>Logout</button>
    </div>
    <div>
      <button
        onClick = {()=>navigate('/newExpense')}
      >Add New Expense</button>
    </div>
    <div>
      <ExpenseHistory />
    </div>
  </div>
 )
}
export default Homepage