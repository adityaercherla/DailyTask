const express = require('express')
var socket = require('socket.io')

//ap setup

const app = express();
var server = app.listen(4321,()=>{
    console.log("Listening to port number")
})


//static files
app.use(express.static('source')) 
// app.get('*',function(res,req){
//     res.send('john cena');
// });
app.get('/',(req,res)=>{
    console.log("Jai Hind,Jai Bharath")
})


// socket setup

var io= socket(server)

io.on('connection',(socket)=>{
console.log("socket connection established ", socket.id)     


socket.on('chat',(data)=>{
    io.sockets.emit('chat',data)
})
})





// const getFlat = require('./routes/flat.route')
// const getTeleVision = require('./routes/tv.route')
// const getUsers = require('./routes/user.route')
// const getProduct = require('./routes/product.route')
// main.use('/api',getProduct)
// main.use('/api',getTeleVision)