import { useState } from 'react'
import './App.css'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './assets/components/Homepage'
import NewExpense from './assets/components/NewExpense'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Homepage />}> </Route>
          <Route path = "/newExpense" element = {<NewExpense />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
