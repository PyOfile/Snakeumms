const io = require('socket.io')();

io.on ('connection', client => {
    client.emit('init', {data:'hello man'});
});

io.listen(3000);