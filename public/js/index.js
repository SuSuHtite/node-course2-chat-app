var socket = io();
socket.on('connect',function(){
    console.log('Connected to server');

  /*  socket.emit('createEmail',{
        to :'jen@example.com',
        text : 'Hay . This is Su Su'
    });*/


  /*  socket.emit('createMessage',{
        from :'Su Su',
        text : 'Hay . This is Su Su'
    });*/
});

socket.on('disconnect',function(){
    console.log('Disconnected from server');
});

socket.on('newMessage',function (message) {
    console.log('New Message',message);
});