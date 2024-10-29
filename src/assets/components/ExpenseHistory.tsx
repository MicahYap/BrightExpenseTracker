import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import {API_URL} from '../../constants/constants'
import { useNavigate } from 'react-router-dom'

function ExpenseHistory() {

  const userId = localStorage.getItem('userId')
  const navigate = useNavigate()
  const [expenseHistory, setExpenseHistory] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const [month, setMonth] = useState(new Date().getMonth())
  const [year, setYear] = useState(new Date().getFullYear())
  const [total, setTotal] = useState()
  

  const expensePerPage = 10;

  useEffect(() => {
    if(!userId) {
      alert('Session expired. Please log in again.')
      navigate('/')
    } else {
      const getExpense = async () => {
        try{
          const response = await axios.get(`${API_URL}/users/${userId}/expenses`,{
            params: {
              month,
              year,
              page: currentPage,
              per_page: expensePerPage
            }
        })
          setExpenseHistory(response.data.expenses)
          setTotalPages(response.data.total_pages)
          setTotal(response.data.total_expense_per_month)
        }catch (error) {
          alert("Error fetching expense history.")
        }
      }
      getExpense()
    }
  }, [userId, currentPage, refresh, month, year])

  const pageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const pagination = () => {
    const pages = [];
    
    if (currentPage > 1) {
      pages.push(
        <button
          key="prev"
          onClick={() => pageChange(currentPage - 1)}
        >
        </button>
      );
    }

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => pageChange(i)}
          style={{ fontWeight: i === currentPage ? 'bold' : 'normal' }}
        >
          {i}
        </button>
      );
    }

    if (currentPage < totalPages) {
      pages.push(
        <button
          key="next"
          onClick={() => pageChange(currentPage + 1)}
        >
          
        </button>
      );
    }
  
    return pages;
  };
  

  const handleDelete = async(id) => {
    try{
      if (!userId) {
        alert('Session expired. Please log in again.')
      navigate('/')
      } else {
        await axios.delete(`${API_URL}/users/${userId}/expenses/${id}`)
      }
    } catch(error){
      alert('Error deleting expense.')
    }
    setRefresh(prev => !prev);
  }

 return (
  <>
    <div>
      <label>Month
        <select value={month} onChange={(e) => setMonth(e.target.value)}>
          {[...Array(12)].map((_, i) => (
            <option key={i} value={i}>
              {new Date(0, i).toLocaleString('en', { month: 'long' })}
            </option>
          ))}
        </select>
      </label>
      <label>
          Year:
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </label>
    </div>
    <div>
      Subtotal: Php {total}
    </div>

    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Category</th>
          <th>Item</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
          {expenseHistory.map(expense => (
            <tr key={expense.id}>
              <td>{expense.date}</td>
              <td>{expense.category_name}</td>
              <td>{expense.item}</td>
              <td>{expense.description}</td>
              <td>Php {expense.amount}</td>
              <td ><button onClick={()=>handleDelete(expense.id)}><FontAwesomeIcon icon={faTrash} /></button></td>
            </tr>
          ))}
      </tbody>
    </table>
    <div>
      {pagination()}
    </div>
  </>
 )
}

export default ExpenseHistory