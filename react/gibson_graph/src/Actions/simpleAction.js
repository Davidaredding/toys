export const MESSAGE = 'MESSAGE_ACTION'

export default function addMessage(text){
    return{
        type: MESSAGE,
        text
    }
}
