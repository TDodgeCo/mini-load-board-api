import express from 'express'
import connectDB from '../db'
import LoadRoutes from './routes/LoadRoutes'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

// Connect to the database
connectDB()

// Middleware to parse JSON
app.use(express.json())

// Define routes
app.get('/', (req, res) => res.send('Welcome to the mini-load-board API'))
app.use('/api/loads', LoadRoutes)

const PORT = process.env.PORT || 3333

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
