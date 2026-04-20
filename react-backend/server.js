import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3000

// Frontend ka URL allow karo
app.use(cors({
  origin: 'https://growithpro.github.io'
}))

app.use(express.json())

// Test route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Namaste from Backend! 🙏' })
})

app.listen(PORT, () => {
  console.log(`Server chal raha hai port ${PORT} pe`)
})