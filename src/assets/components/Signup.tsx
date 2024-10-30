import { FormEvent } from 'react';
import { useState } from "react";
import axios from 'axios';
import {API_URL} from '../../constants/constants'
import EmailInput from "./EmailInput";


function Signup() {
  const [email, setEmail] =  useState('')

  const handleSignup = async(e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    try{
      let response = await axios.post(`${API_URL}/signup`, {
        user: {
          email: email
        }
      })
      alert("You're now registered! Please log in")
      setEmail('')
    } catch (error) {
      alert('Signup Error')
    }
    
  }

 return (
  <div>
    <div>
      <b className='text-lg'>Don't have an account yet?</b>
      <br></br>
      <b> Register with your email!</b>
      <form onSubmit={handleSignup} className='flex flex-col space-y-2'>
        <EmailInput email={email} setEmail={setEmail}/>
        <button 
          type='submit'
          className='w-44 bg-pink-500 text-pink-100 hover:bg-pink-400 rounded-lg py-2 transition duration-200'
        > Sign Up </button>
      </form>
      </div>
  </div>
  
 )
}
export default Signup