
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');


const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;



var app = express();
var server = http.createServer(app);
var io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection',(socket)=>{
    console.log('New user connected');

    /*socket.emit('newMessage',{
        from :'ma ma',
        text : 'Hey. What is going on.',
        createAt : 123123
    });*/

   /* socket.on('createEmail',(newEmail)=>{
        console.log('create Email',newEmail);
    });*/

    //socket.emit form Admin text Welcome to the chat app
    socket.emit('newMessage',{
        from :'Admin',
        text :'Welcome to the chat app'
    });

    //socket.broadcast.emit form Admin text New user joined

    socket.broadcast.emit('newMessage',{
        from :'Admin',
        text :'New user joined',
        createdAt : new Date().getTime()
    });

    socket.on('createMessage',(message)=>{
        console.log('create Message',message);
        /*io.emit('newMessage',{
            from : message.from,
            text : message.text,
            createdAt : new Date().getTime()
        });*/
        socket.broadcast.emit('newMessage',{
            from : message.from,
            text : message.text,
            createdAt : new Date().getTime()
        })
    });

    socket.on('disconnect',()=>{
       console.log('User was disconnected!');
    });
});


server.listen(port,()=>{
    console.log('server is up on port ', port);
});

