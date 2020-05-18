import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

const App = () => {
  const [post, setPost] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div className='App'>
      <h1>Clean</h1>
    </div>
  )
}

export default App
