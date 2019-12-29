import { Action } from '@ngrx/store';

import * as fromMensaje from './mensaje.action';

export interface appState {
    texto : string
}

export const initialState = {
    texto : 'Código Mentor'
}

// Funcion Pura
// Crea un estado nuevo a partir del estado actual, sin modificarlo

export function miReducer(state : appState = initialState, action: fromMensaje.MensajeActions){
    console.log(action);

    switch(action.type){
        case fromMensaje.SPANISH:
            return {
                ...state, 
                texto: action.payload
            }

        case fromMensaje.ENGLISH:
            return {
                ...state,
                texto: action.payload
            }
        default:
            return state;
    }

} 



/* 
switch(action.type){
    case 'SPANISH':
        return {
            ...state, 
            texto: 'Hola mundo'
        }

    case 'ENGLISH':
        return {
            ...state,
            texto: "Hello World"
        }
    default:
        return state;
} */