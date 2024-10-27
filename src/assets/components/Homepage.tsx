import { useState, useEffect } from "react";
import ExpenseHistory from "./ExpenseHistory";

function Homepage() {
 return (
  <div>
    <div>
      <span> Bright Expense Tracker </span>
      <button>Logout</button>
    </div>
    <div>
      <button>Add New Expense</button>
    </div>
    <div>
      <ExpenseHistory />
    </div>
  </div>
 )
}
export default Homepage