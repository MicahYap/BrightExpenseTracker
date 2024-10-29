import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import ExpenseHistory from "./ExpenseHistory";

function Homepage() {
 const navigate = useNavigate()
 return (
  <div>
    <div>
      <span> Bright Expense Tracker </span>
      <button>Logout</button>
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