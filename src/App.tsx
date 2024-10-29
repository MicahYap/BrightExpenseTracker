import { useState } from 'react'
import './App.css'
import './index.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Homepage from './assets/components/Homepage'
import NewExpense from './assets/components/NewExpense'
import AccessPage from './assets/components/AccessPage'

function App() {
  const [email, setEmail] = useState<string>('')

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<AccessPage email={email} setEmail={setEmail}/>}> </Route>
          <Route path = "/homepage/:userId" element ={<Homepage />}></Route>
          <Route path = "/newExpense" element = {<NewExpense />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
