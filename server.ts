import express, { Request, Response } from 'express';
import { userRouter } from './src/user/router/userRoutes';

const app = express();
const PORT = 3000;



// USER ROUTES
app.use("/api/user", userRouter );


// SERVER PING TEST
app.get("/api/ping", (req: Request, res: Response) => {
    res.json({ message: "Server is running" });
})
app.listen(PORT, (): void => {
    console.log(`server is running on ${PORT}`);
})

