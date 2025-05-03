import { prototype } from 'ws';
import {WebsocketServer} from 'wss'


wss=new WebsocketServer({port:8000})


wss.on('connection',(ws)=>{
    console.log('welcome to the server, dear user')

    
})