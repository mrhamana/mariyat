import WebSocket from "ws";
export default function sendMessage(message){
    const uri = 'http://localhost:5000/api/auth/chat';

    const ws = new WebSocket(uri);

    ws.on('open', () => {
        console.log('WebSocket connection opened');
        ws.send(JSON.stringify({ message }));
    });
}

