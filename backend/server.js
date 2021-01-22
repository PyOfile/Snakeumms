const io = require('socket.io')();

io.on ('connection', client => {
    client.emit('init', {data:'hello man'});
});

io.listen(process.env.PORT || 4000);