import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/post.js';
import dotenv from 'dotenv'; 

const app = express();
dotenv.config()

app.use(express.urlencoded({extended: true, limit: '30mb'}));
app.use(express.json({limit: '30mb'}));
app.use(cors());
app.use('/posts', postRoutes); 

// const CONNECTION_URL = 'mongodb+srv://user:ze87UbCJ2bWlmhvX@cluster0.ikm3cen.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`)))
    .catch((err) => console.error(err.message));


