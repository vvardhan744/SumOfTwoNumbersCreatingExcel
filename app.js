const dotenv = require("dotenv");
var ip = require('ip');
dotenv.config(); 
const server = require('./express')();
const port = process.env.PORT || 4444;
server.listen(port,()=>{
    console.log(`Server running on port http://${ip.address()}:${port}`);
})