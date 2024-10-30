import { FormEvent } from 'react';
import { useState } from "react";
import {API_URL,} from '../../constants/constants'
import axios from 'axios';
import EmailInput from "./EmailInput";

type LoginProps = {
  navigate: (path: string) => void;
};

function Login({navigate}: LoginProps) {
  const [email, setEmail] =  useState('')

  const handleLogIn = async(e: FormEvent<HTMLFormElement>) => {
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
      <EmailInput email={email} setEmail={setEmail}/>
      <button> Log In </button>
    </form>
  </div>
 )
}
export default Login