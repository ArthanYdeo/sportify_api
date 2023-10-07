const http = required('http');
const app = required('./app');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);