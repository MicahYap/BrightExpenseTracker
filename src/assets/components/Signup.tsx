import axios from 'axios';
import {API_URL, user} from '../../constants/constants'

type SignupProps = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  navigate: (path: string) => void;
};

function Signup({email, setEmail, navigate}: SignupProps) {

  const handleSignup = async(e) =>{
    e.preventDefault()
    try{
      let response = await axios.post(`${API_URL}/signup`, {
        user: {
          email: email
        }
      })
      const userId = response.data.status.data.user.id 
      navigate(`/homepage/${userId}`)
    } catch (error) {
      alert('Signup Error')
    }
    
  }




 return (
  <div>
    <div>Don't have an account yet? Register with your email!</div>
    <form onSubmit={handleSignup}>
      <label>Email</label>
      <input 
        type='text' 
        value = {email}
        onChange = {(e) => setEmail(e.target.value)}
        ></input>
      <button> Sign Up </button>
    </form>
  </div>
 )
}
export default Signup