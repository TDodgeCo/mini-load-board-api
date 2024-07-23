import express from 'express';
import connectDB from '../db';
import loadRoutes from './routes/load';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Connect to the database
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Define routes
app.use('/api/loads', loadRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
