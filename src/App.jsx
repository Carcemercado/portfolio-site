import React from 'react'
import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import MainBody from './components/MainBody'
import MainNav from './components/MainNav'
import Projects from './components/Projects'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
 


function App() {
  
  useEffect(() => {
    document.title = `Carlos's Vite + React App Portfolio`
  }, [])

  return (
    <>
      <Header />
      <Router>
        <div className='grid-container'>
        <Routes>
          <Route path="/" element={<MainBody />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        </div>
        <MainNav />
      </Router>

      
    </>
  )
}

export default App
