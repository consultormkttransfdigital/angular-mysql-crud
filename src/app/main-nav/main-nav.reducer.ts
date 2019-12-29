import { Action } from '@ngrx/store';
import { AppState } from '../models/globals.model';

import * as fromMainNav from './main-nav.actions';

export const initialState = {
    titleOpcSelected: 'Menú Principal',
    idUsrSelected: 0,
    nomUsrSelected: "",
    cargoUsrSelected: "",
    urlImgUsrSelected: "",
    showNavBar: false,
    vista: 1,
    fechaProgramacion: new Date(""),
    estado: 0
}

export function mainNavReducer( state: AppState = initialState, action: fromMainNav.mainNavActions){

    console.log(action);

    switch ( action.type) {
        case fromMainNav.LOGIN:
            return { ...state, 
                titleOpcSelected: action.payload
            }
        case fromMainNav.VALIDA_USUARIO:
            return { ...state,
                idUsrSelected: action.payload.id_usuario,
                nomUsrSelected: action.payload.nom_usuario,
                cargoUsrSelected: action.payload.cargo_usuario,
                urlImgUsrSelected: action.payload.url_usuario
            }
        case fromMainNav.PANEL:
            return { ...state, 
                titleOpcSelected: action.payload
            }
        case fromMainNav.CAJA:
            return { ...state,
                titleOpcSelected: action.payload
            }
        case fromMainNav.INGRESOS:
            return { ...state,
                titleOpcSelected: action.payload
            }
        case fromMainNav.EGRESOS:  
            return { ...state,
                titleOpcSelected: action.payload
            }
        case fromMainNav.CLIENTES:
            return { ...state, 
                titleOpcSelected: action.payload
            }
        case fromMainNav.INDICADORES:
            return { ...state,
                titleOpcSelected: action.payload
            }
        case fromMainNav.ENTERAPP:
            return {...state, 
                showNavBar: true
            }

        case fromMainNav.PANEL_FILTER:
            return { ...state, 
                fechaProgramacion: action.payload
            }

        case fromMainNav.PANEL_FILTER_VISTA:
            return { ...state, 
                vista: action.payload
            }

        default:
            return state;
    }

}
