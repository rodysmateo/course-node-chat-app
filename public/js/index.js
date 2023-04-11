var socket = io(); 

    socket.on('connect', function () {
        console.log('Connected to server');

        socket.emit('createMessage', {
            from: 'Rodys',
            text: 'Yup, that works for me'
        });
    });

    socket.on('disconnect', function () {
        console.log('Disconnected form server');
    });

    socket.on('newMessage', function (message) {
        console.log('New message', message);
    });