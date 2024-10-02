import express from 'express'
import config from './config/serverConfig.js'

const startupServer = ()=>{

    const app = express()

    app.listen(config.PORT, ()=>{
        console.log(`Server is listening on port no: ${config.PORT}`)
    })
}

startupServer()