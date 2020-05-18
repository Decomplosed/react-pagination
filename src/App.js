import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

const App = () => {
  const [post, setPost] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPostsPerPage(res.data)
      setLoading(false)
    }
  }, [])

  return (
    <div className='App'>
      <h1>Clean</h1>
    </div>
  )
}

export default App
