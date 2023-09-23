import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ParentPage from './pages/ParentPage'
import Contact from './pages/Contact'
import Register from './pages/Register'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ParentPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
