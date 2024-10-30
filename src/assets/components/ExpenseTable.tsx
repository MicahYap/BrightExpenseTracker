import axios from "axios";
import {API_URL} from '../../constants/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface Expense {
  id: number;
  date: string;
  category_name: string;
  item: string;
  description: string;
  amount: number;
}

interface ExpenseTableProps {
  expenseHistory: Expense[];
  userId: string | null;
  navigate: (path: string) => void;
  setRefresh: (value: (prev: boolean) => boolean) => void;
}

function ExpenseTable ({expenseHistory, userId, navigate, setRefresh}: ExpenseTableProps){

  const handleDelete = async(id: number) => {
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
  return(
    <>
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
    </>
  )
}

export default ExpenseTable