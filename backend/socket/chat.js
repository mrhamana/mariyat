import { WebSocketServer, WebSocket } from 'ws';
import chatSocket from './chatSocket.js'; 

const wss = new WebSocketServer({ port: 8080 });
const waitingClients = [];
const activeCleanups = new Map(); 

wss.on('connection', (ws) => {
    console.log('Client connected...');

    if (waitingClients.length > 0) {
        const partner = waitingClients.pop();
        console.log('Pairing clients...');

        
        ws.send(JSON.stringify({ type: 'match', message: 'You are paired!' }));
        partner.send(JSON.stringify({ type: 'match', message: 'You are paired!' }));

        
        const cleanupFunc = chatSocket(ws, partner);

        
        activeCleanups.set(ws, cleanupFunc);
        activeCleanups.set(partner, cleanupFunc);

    } else {
        console.log('Client waiting for partner...');
        waitingClients.push(ws);
        ws.send(JSON.stringify({ type: 'waiting', message: 'Waiting for a partner...' }));
    }

    ws.on('close', () => {
        console.log('Client disconnected.');
        
        const waitingIndex = waitingClients.indexOf(ws);
        if (waitingIndex !== -1) {
            waitingClients.splice(waitingIndex, 1);
            console.log('Removed client from waiting list.');
        }

        if (activeCleanups.has(ws)) {
            
            activeCleanups.delete(ws); 
        }

    });

     ws.on('error', (error) => {
         console.error('WebSocket error:', error.message);
         
         
          if (activeCleanups.has(ws)) {
             const cleanupFunc = activeCleanups.get(ws);
             cleanupFunc(); 
             activeCleanups.delete(ws);
             
         }
         
         const waitingIndex = waitingClients.indexOf(ws);
         if (waitingIndex !== -1) {
            waitingClients.splice(waitingIndex, 1);
         }
         
         if (ws.readyState !== WebSocket.CLOSED) {
            ws.terminate();
         }
     });
});

console.log('WebSocket server started on port 8080');