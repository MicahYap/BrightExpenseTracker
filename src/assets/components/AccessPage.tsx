import Signup from "./Signup";
import Login from "./Login"
import { useNavigate } from "react-router-dom";

function AccessPage() {
  const navigate = useNavigate();

 return (
  <div>
    <Login navigate={navigate} />
    <Signup navigate={navigate} />
  </div>
 )
}
export default AccessPage