import { useState } from "react";
import {API_URL,} from '../../constants/constants'
import axios from 'axios';

type LoginProps = {
  navigate: (path: string) => void;
};

function Login({navigate}: LoginProps) {
  const [email, setEmail] =  useState('')

  const handleLogIn = async(e) => {
    e.preventDefault();
    try{
      let response = await axios.post(`${API_URL}/login`, {
        user: {
          email: email
        }
      })

      const userId = response.data.user.id
      localStorage.setItem('userId', response.data.user.id)
      navigate(`/homepage/${userId}`)
    }
    catch(error){
      alert('Login Error')
    }
  }
 return (
  <div>
    <div>Login Here:</div>
    <form onSubmit={handleLogIn}>
      <label>Email</label>
      <input 
        type='text' 
        value = {email}
        onChange = {(e) => setEmail(e.target.value)}>
      </input>
      <button> Log In </button>
    </form>
  </div>
 )
}
export default Login