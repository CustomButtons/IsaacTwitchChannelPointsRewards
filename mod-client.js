var net = require('net');

var client = new net.Socket();
client.setEncoding('utf8');

client.connect(8666, '127.0.0.1', function() {
	console.log('TCP connected');
    setTimeout(() => {
	console.log('TCP send getItems command');
        client.write(JSON.stringify({
            m: 'getItems'
        }));
    }, 5000);
});

client.on('data', function(data) {
	console.log('TCP received: ' + data);
});

client.on('close', function() {
	console.log('TCP connection closed');
});