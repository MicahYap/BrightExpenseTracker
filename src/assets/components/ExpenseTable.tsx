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
      <tr className='bg-pink-500 text-pink-100'>
        <th className='px-4 py-2 border'>Date</th>
        <th className='px-4 py-2 border'>Category</th>
        <th className='px-4 py-2 border'>Item</th>
        <th className='px-4 py-2 border'>Description</th>
        <th className='px-4 py-2 border'>Amount</th>
        <th className='px-4 py-2 border'>Action</th>
      </tr>
    </thead>
    <tbody className="text-center">
      {expenseHistory.map(expense => (
        <tr key={expense.id} className="hover:bg-pink-300">
          <td className='px-4 py-2 border'>{expense.date}</td>
          <td className='px-4 py-2 border'>{expense.category_name}</td>
          <td className='px-4 py-2 border'>{expense.item}</td>
          <td className='px-4 py-2 border'>{expense.description}</td>
          <td className='px-4 py-2 border'>Php {expense.amount}</td>
          <td className='px-4 py-2 border'>
            <button onClick={() => handleDelete(expense.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</>

  )
}

export default ExpenseTable