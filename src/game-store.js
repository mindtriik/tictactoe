import { readable } from "svelte/store";

let connection; 
let connectionTimer; 
let message; 

const connect = () => {
    try {
        if (!connection || connection.readyState >= 2) {
            connection = new WebSocket(import.meta.env.VITE_wsURL);

            connection.onclose = (ev) => {
                console.log(ev, 'closed' );
                connectionTimer = setInterval(() => {
                    connect();
                }, 500);
            }
        }

        connection.onopen = () => {
            clearInterval(connectionTimer);
            console.log ('connected');
        }

        connection.onmessage = (ev) => {
            message = ev.data;
        }

    } catch (e) {
        console.log(e, 'Logging error')
    }
};

const store = new readable(undefined, (set) => {
    const messageTimer = setInterval(() => {
        if (message) {
            set(JSON.parse(message));
            message = undefined;
        }
    }, 5)

    return () => {
        if (connection) {
            connection.close();
        }
        clearInterval(messageTimer);
    };
});

connect();

export default {
    subscribe: store.subscribe,
    isCOnnected: () => connection.readyState <= 1,
}