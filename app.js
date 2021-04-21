const dotenv = require("dotenv");
var ip = require('ip');
dotenv.config(); 
const server = require('./express')();
const port = process.env.PORT || 4444;
global._root=__dirname;
server.listen(port,()=>{
    console.log(`Server running on port http://${ip.address()}:${port}`);
})