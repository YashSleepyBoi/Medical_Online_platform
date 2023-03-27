
id='mongodb+srv://yash1234:yash2003@cluster0.bzquy0i.mongodb.net/?retryWrites=true&w=majority'
const mongoose = require('mongoose');  
mongoose.connect(id).then(console.log("connected"))
const User=require('./models/admin');

var SerialPort = require('serialport');
const parsers = SerialPort.parsers;



var port = new SerialPort('/dev/cu.usbserial-110',{ 
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});

port.pipe(parser);

console.log(User.findOne({}).token);
port.write( User.findOne({}).token );


app.listen(3000);