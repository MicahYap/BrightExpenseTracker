import { FormEvent } from 'react';
import { useState } from "react";
import axios from 'axios';
import {API_URL} from '../../constants/constants'
import EmailInput from "./EmailInput";

type SignupProps = {
  navigate: (path: string) => void;
};

function Signup({navigate}: SignupProps) {
  const [email, setEmail] =  useState('')

  const handleSignup = async(e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    try{
      let response = await axios.post(`${API_URL}/signup`, {
        user: {
          email: email
        }
      })
      const userId = response.data.user.id; 
      navigate(`/homepage/${userId}`);
    } catch (error) {
      alert('Signup Error')
    }
    
  }

 return (
  <div>
    <div>Don't have an account yet? Register with your email!</div>
    <form onSubmit={handleSignup}>
      <EmailInput email={email} setEmail={setEmail}/>
      <button> Sign Up </button>
    </form>
  </div>
 )
}
export default Signup