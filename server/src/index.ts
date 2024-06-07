import express from 'express'
import cors from 'cors'

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send({
        status: true,
        message: "Welcome to Authentication Server!"
    })
})

app.listen(8000, () => {
    console.log('Server started on Port', 8000);
})