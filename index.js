// import .env file
require('dotenv').config()

// server creation
// express

// 1 - import express
const express = require('express')
const router = require('./router/router')
const cors = require('cors')

// 2 - Create server using express
const server = express()

// integrate Front-End
server.use(cors())

// to convert json to .js
server.use(express.json())

// router set
server.use(router)

// import connection.js file
require('./connections/connection')

// 3 - server run
// port 
const port = 5000 || process.env.port

server.listen(port, () => {
    console.log(`___________server started at port number ${port}___________`);
})

