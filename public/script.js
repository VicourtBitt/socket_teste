const socket = io('http://localhost:3000');

socket.on('newEvent', (data) => {
    console.log(data);
})