import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/home/Home'
import About from './screens/about/About'
import FloatingActions from './components/floatingActions/FloatingActions'
import Course from './screens/course/Course'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/courses/:slug" element={<Course />} />
      </Routes>

      <FloatingActions />
    </>
  )
}
