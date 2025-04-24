import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import Index from './pages/Index'
import About from './pages/About'
import Contact from './pages/Contact'
import Teachers from './pages/Teachers'
import StudentPortal from './pages/StudentPortal'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/student-portal" element={<StudentPortal />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App