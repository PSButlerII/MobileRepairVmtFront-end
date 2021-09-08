// const http = require('http');
import http from "http";
// const express = require('express');
import express from 'express';
// const socketio = require('socket.io');
import socketio from 'socket.io';
// const cors = require('cors');
import cors from "cors";
import { addUser, removeUser, getUser, getUsersInRoom } from './users.js';
import { router } from './router.js';
// const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const PORT = 5000;

// const router = require('./router');


var app = express();
app.use(cors());
app.use(router);

const server = http.createServer(app);
const io = socketio(server);



io.on('connect', (socket) => {
    socket.on('join', ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });

        if (error) return callback(error);

        socket.join(user.room);

        socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.` });
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', { user: user.name, text: message });

        callback();
    });

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);

        if (user) {
            io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
            io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
        }
    })
});

server.listen(PORT, () => console.log(`Server has started. Running on port: ${PORT}`));