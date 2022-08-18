import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import router from './routes/movieRoutes';

dotenv.config();
const app = express();
app.use(
    cors({
        origin: '*',
    }),
);
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const ServerPort: any = process.env.PORT;
const PORT: any = ServerPort | 5000;

app.use('/api/home', router);

app.listen(PORT, () => console.log(`Server Running on PORT ${PORT}`));
