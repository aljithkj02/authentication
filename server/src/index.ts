import express from 'express'
import cors from 'cors'
import { emailJwtRouter } from './routers/email-jwt';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send({
        status: true,
        message: "Welcome to Authentication Server!"
    })
})

app.use('/email-jwt', emailJwtRouter);

app.listen(8000, () => {
    console.log('Server started on Port', 8000);
})