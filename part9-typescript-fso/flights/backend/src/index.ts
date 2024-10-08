import express from "express"; 
import diaryRouter from './routes/diaries';
const app = express();
const port = 3000;

app.use(express.json());

app.get("/ping", (_req, res) => {
    console.log("someone pinged here"); 
    res.send("pong");
});

app.use('/api/diaries', diaryRouter);

app.listen(port, () => console.log(`Server is up & running on port ${port}`));