import { Router } from 'express';
import io from './socketServer.js'

const router = Router();

router.post('/teste', (req, res) => {
    const data = req.body;

    io.on('connection', (socket) => {
        socket.emit('newEvent', data);
    });
})

export default router;