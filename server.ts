import express, { Request, Response } from 'express';
import { userRouter } from './src/user/router/userRoutes';
import connect from './src/config/db';

const app = express();
const PORT = 3000;

app.use(express.json());
// USER ROUTES
app.use("/api/user", userRouter );


// SERVER PING TEST
app.get("/api/ping", (req: Request, res: Response) => {
    res.json({ message: "Server is running" });
})
// DB Connection
connect();
app.listen(PORT, (): void => {
    console.log(`server is running on ${PORT}`);
})

