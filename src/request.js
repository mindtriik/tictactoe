export const nextMove = async (space) => {

    try {
        const response = await fetch(`${import.meta.env.VITE_apiURL}/next-turn/${space}`);
        const message = await response.json();
    
        return message.errorMessage
    } catch (error) {
        console.log(error);
        return 'Error connecting to the server'
        
    }
   
}

export const reset = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_apiURL}/reset`);
        const message = await response.json();

        return message.errorMessage;
    } catch (error) {
        console.log(error);
        return 'Error reseting game'
        
    }
}