import express from 'express';
import { router as authRoutes } from './routes/authRoutes';
import { router as resourRoutes } from './routes/resourcesRoutes';

const app = express();
const port = 3000;

app.use(express.json());
app.use(authRoutes);
app.use(resourRoutes);

app.listen(port, () => {
    console.log(`App listen on port ${port}`);
});