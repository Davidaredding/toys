import {MESSAGE} from '../Actions/simpleAction'

const initialState = {
    motd: ""
}

export default function messageApp(state = initialState,action){
    switch(action.type){
        case MESSAGE:
            return Object.assign({},state, {
                motd: action.text
            });
        default:
            return state;
    }
}
