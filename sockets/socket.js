const {io} = require('../index');

//mensajes de socket

io.on('connection', client =>{
    client.on('disconnect',()=> console.log('Cliente desconectado'));
    client.on('mensaje',(payload)=>{
        console.log('Mensaje!!', payload);
        io.emit('mensaje',{ admin: 'Nuevo mensaje'});
    })
});

