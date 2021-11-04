import io from 'socket.io-client';

const socket = io('localhost:3001/chess');

export default socket;
