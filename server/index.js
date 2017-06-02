const Server = require('./Server');
const PORT = process.env.PORT || 3000;

const server = new Server();
server.listen(PORT);
