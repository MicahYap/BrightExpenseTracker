import { useState } from 'react'
import './App.css'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './assets/components/Homepage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Homepage />}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
