import Signup from "./Signup";
import Login from "./Login"
import { useNavigate } from "react-router-dom";

type AccessPageProps = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
};

function AccessPage({email, setEmail}: AccessPageProps) {
  const navigate = useNavigate();

 return (
  <div>
    <Login email={email} setEmail={setEmail} navigate={navigate} />
    <Signup email={email} setEmail={setEmail} navigate={navigate} />
  </div>
 )
}
export default AccessPage