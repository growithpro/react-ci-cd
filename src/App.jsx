import { useState, useEffect } from 'react'

const API = import.meta.env.VITE_API_URL 

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch(`${API}/api/hello`)
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => setMessage('Backend se connection nahi hua!'))
  }, [])

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React + Render CI/CD 🚀</h1>
      <p>Backend ka jawab: <strong>{message}</strong></p>
    </div>
  )
}

export default App