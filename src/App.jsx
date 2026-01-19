import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/home/Home'
import About from './screens/about/About'
import FloatingActions from './components/floatingActions/FloatingActions'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>

      <FloatingActions />
    </>
  )
}
