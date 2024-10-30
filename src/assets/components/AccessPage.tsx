import Signup from "./Signup";
import Login from "./Login"
import { useNavigate } from "react-router-dom";

function AccessPage() {
  const navigate = useNavigate();

 return (
  <div className='min-h-screen bg-gradient-to-b from-pink-400 to-pink-300 flex justify-center items-center'>
    <div className='flex flex-col space-y-6 p-8 bg-pink-200 rounded-lg shadow-lg'>
      <b className='text-pink-500 text-5xl text-center'>Bright Expense Tracker</b>
      <Login navigate={navigate} />
      <Signup />
    </div>
</div>

 )
}
export default AccessPage