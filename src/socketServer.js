import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

import apiRouter from './api.js';

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer)

app.use(
    express.static('public'),
    express.json(),
    apiRouter
);

httpServer.listen(3000, () => {
    console.log('listening on *:3000');
})

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
})

export default io;