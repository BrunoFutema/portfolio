import 'dotenv/config';
import 'reflect-metadata';

import express from 'express';
import cors from 'cors';

import airCncUploadConfig from '@config/airCncUpload';

import { Server as SocketIo, Socket } from 'socket.io';
import { createServer } from 'http';

import routes from './routes';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();
const server = createServer(app);
const io = new SocketIo(server, {
  cors: { origin: '*', methods: ['GET', 'POST'] },
});

const connectedUsers = {};

io.on('connection', (socket: Socket) => {
  const { user_id } = socket.handshake.query as { user_id };

  connectedUsers[user_id] = socket.id;
});

app.use((request, response, next) => {
  request.io = io;
  request.connectedUsers = connectedUsers;

  return next();
});

app.use(
  cors({
    origin: '*',
  }),
);
app.use(express.json());
app.use('/air-cnc-files/', express.static(airCncUploadConfig.airCncFolder));
app.use(routes);

server.listen(3333, () => console.info('🚀 Server started on port 3333!'));
