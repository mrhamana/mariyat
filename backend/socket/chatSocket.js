
import { WebSocket } from 'ws'; 
export default function chatSocket(ws1, ws2) {

   
    const sendMessage = (targetWs, type, message) => {
        
        if (targetWs && targetWs.readyState === WebSocket.OPEN) { 
            try {
                targetWs.send(JSON.stringify({ type, message }));
            } catch (error) {
                console.error(`Failed to send message to a client: ${error.message}`);
                
            }
        } else {
            console.log("Attempted to send message to a closed or undefined socket.");
        }
    };

    
    const handleMessage1 = (data) => {
        console.log('Received message from ws1, forwarding to ws2');
        
        if (ws2 && ws2.readyState === WebSocket.OPEN) {
             try {
                ws2.send(data);
             } catch (sendError) {
                 console.error(`Error sending message from ws1 to ws2: ${sendError.message}`);
                
             }
        } else {
            console.log("Partner (ws2) is not available to receive message from ws1.");
            
            
        }
    };

    
    const handleMessage2 = (data) => {
        console.log('Received message from ws2, forwarding to ws1');
        
        
        if (ws1 && ws1.readyState === WebSocket.OPEN) {
             try {
                 ws1.send(data);
             } catch (sendError) {
                  console.error(`Error sending message from ws2 to ws1: ${sendError.message}`);
                 
                 
             }
        } else {
            console.log("Partner (ws1) is not available to receive message from ws2.");
            
            
        }
    };

    
    const handleClose1 = () => {
        console.log('ws1 disconnected.');
        
        sendMessage(ws2, 'info', 'Your partner has disconnected.');
        
        cleanup();
    };

    
    const handleClose2 = () => {
        console.log('ws2 disconnected.');
        
        sendMessage(ws1, 'info', 'Your partner has disconnected.');
        
        cleanup();
    };

    
    const handleError1 = (error) => {
        console.error('Error on ws1:', error.message);
        
        sendMessage(ws2, 'error', 'An error occurred with your partner\'s connection.');
        
        cleanup();
        if (ws1.readyState !== WebSocket.CLOSED) ws1.terminate();
        if (ws2.readyState !== WebSocket.CLOSED) ws2.terminate();
    };

    
    const handleError2 = (error) => {
        console.error('Error on ws2:', error.message);
        
        sendMessage(ws1, 'error', 'An error occurred with your partner\'s connection.');
        
        cleanup();
        if (ws1.readyState !== WebSocket.CLOSED) ws1.terminate();
        if (ws2.readyState !== WebSocket.CLOSED) ws2.terminate();
    };

    
    ws1.on('message', handleMessage1);
    ws2.on('message', handleMessage2);
    ws1.on('close', handleClose1);
    ws2.on('close', handleClose2);
    ws1.on('error', handleError1);
    ws2.on('error', handleError2);

    console.log("Chat socket listeners attached between two clients.");

    
    
    
    
    const cleanup = () => {
        console.log("Cleaning up chat socket listeners.");
        ws1.off('message', handleMessage1);
        ws2.off('message', handleMessage2);
        ws1.off('close', handleClose1);
        ws2.off('close', handleClose2);
        ws1.off('error', handleError1);
        ws2.off('error', handleError2);
      
    };

    
    return cleanup;
}
