import express, {NextFunction, Request, Response} from 'express';
import dotenv from 'dotenv';

/* ====================================
|  Import variable from .env
======================================= */
dotenv.config();

/* ====================================
|  Configure ExpressJS
======================================= */
const app = express();

app.get('/ping', (req: Request, res : Response, next: NextFunction) => {
    try {
        res.status(200).send(req.headers);
    } catch (e: unknown) {
        next(e)
    }
});

app.get('*', (req: Request, res : Response) => {
    res.status(404)
})

//Error Handler
app.use((err: Error, req: Request, res: Response) => {
    console.error(err.message);
    res.status(500).end();
});

const port = process.env.PING_LISTEN_PORT || 3000
app.listen(port, () => {
    console.log(`Listening on ${port}`)
})
