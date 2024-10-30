import { useNavigate } from "react-router-dom";
import ExpenseHistory from "./ExpenseHistory";
import { API_URL } from "../../constants/constants";
import axios from "axios";

function Homepage() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.delete(`${API_URL}/logout`);
      navigate('/');
    } catch (error) {
      alert('Error logging out');
    }
  };

  return (
   
    <div className='min-h-screen bg-gradient-to-b from-pink-400 to-pink-300'>
      <div className='flex items-center w-full p-4'>
        <b className='flex-grow text-center text-4xl text-pink-100'>
          Bright Expense Tracker
        </b>
        <button
          onClick={handleLogout}
          className='ml-auto bg-pink-500 text-white hover:bg-pink-300 rounded-lg px-4 py-2 shadow-md transition duration-200 ease-in-out transform hover:scale-105'
        >
          Logout
        </button>
      </div>

      <div>
        <button
          onClick={() => navigate('/newExpense')}
          className='mr-6 ml-6 border border-pink-500 bg-pink-500 text-white hover:bg-pink-300 hover:border-pink-300 rounded-lg px-4 py-2 shadow-md transition duration-200 ease-in-out transform hover:scale-105'
        >
          + Add New Expense
        </button>
      </div>
      <div className='mr-6 ml-2'>
        <ExpenseHistory navigate={navigate} />
      </div>
    </div>
  )
}
export default Homepage;
