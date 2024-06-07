import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { allRoutes } from './routers';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));
app.use(express.json());
app.use(cookieParser(process.env.SESSION_SECRET));

app.get('/', (req, res) => {
    res.send({
        status: true,
        message: "Welcome to Authentication Server!"
    })
})

app.use('/api', allRoutes)

app.listen(8000, () => {
    console.log('Server started on Port', 8000);
})