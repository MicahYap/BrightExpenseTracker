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
  <div className='flex'>
    <div>
      <b className='text-lg'>Login Here:</b>
      <form onSubmit={handleLogIn} className='flex flex-col space-y-2 mb-12'>
        <EmailInput email={email} setEmail={setEmail}/>
        <button 
          type='submit'
          className='w-44 bg-pink-500 text-pink-100 hover:bg-pink-400 rounded-lg py-2 transition duration-200'
        > Log In </button>
      </form>
    </div>
    
  </div>
 )
}
export default Login