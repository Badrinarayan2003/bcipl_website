import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/home/Home'
import About from './screens/about/About'
import FloatingActions from './components/floatingActions/FloatingActions'
import Course from './screens/course/Course'
import Announcement from './screens/announcement/Announcement'
import Contact from './screens/contact/Contact'
import Terms from './screens/terms/Terms'
import Policy from './screens/policy/Policy'
import ScrollToTop from './util/ScrollToTop'
import NotFound from './screens/notFound/NotFound'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/courses/:slug" element={<Course />} />
        <Route path="/resources/announcements" element={<Announcement />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<Policy />} />


        {/* 404 CATCH ALL */}
        <Route path="*" element={<NotFound />} />


      </Routes>
      <ScrollToTop />
      <FloatingActions />
    </>
  )
}
