import { useState, useEffect } from "react";
import axios from "axios";
import {API_URL} from '../../constants/constants'
import MonthYearDisplay from "./MonthYearDisplay";
import Pagination from "./Pagination";
import ExpenseTable from "./ExpenseTable";

type ExpHistoryProp = {
  navigate: (path: string) => void;
};

function ExpenseHistory({navigate}: ExpHistoryProp) {

  const userId = localStorage.getItem('userId')
  const [expenseHistory, setExpenseHistory] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const [month, setMonth] = useState(new Date().getMonth()+1)
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


 return (
  <>
    <MonthYearDisplay month={month} setMonth={setMonth} year={year} setYear={setYear}/>

    <div>
      Subtotal: Php {total}
    </div>

    <ExpenseTable expenseHistory={expenseHistory} userId={userId} navigate={navigate} setRefresh={setRefresh} />
    <div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages}/>
    </div>
  </>
 )
}

export default ExpenseHistory