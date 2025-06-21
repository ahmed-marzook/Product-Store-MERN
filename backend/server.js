import express from 'express';

import dotenv from 'dotenv';

import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Add this line to parse JSON bodies
app.use(express.json()); // allows us to parse JSON request bodies

app.use('/api/products', productRoutes)

app.listen(PORT, () => {
    connectDB();
    console.log('Server is running on http://localhost:5000');
});

