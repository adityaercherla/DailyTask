//Make a aconnection

var socket = io.connect('http://localhost:4321')


var message = document.getElementById('message')
 var btn = document.getElementById('send')
 var output = document.getElementById('output')
 var handle = document.getElementById('handle')

 //Emit events
btn.addEventListener('click',()=>{
    socket.emit('chat',{
        message:message.value,
        handle:handle.value
    })
})

//Listen for events

socket.on('chat',(data)=>{
    output.innerHTML+='<p><strong>'+data.handle+':</strong>'+data.message+'</p>'
})
//
var user = document.getElementById('Handle').value