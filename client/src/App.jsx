import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ParentPage from './pages/ParentPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ParentPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
