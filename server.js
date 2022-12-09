const http = require('http');
const app = require('./server/app');

app.set('port', 3000);

const server = http.createServer(app);

server.listen(process.env.PORT || 3000);