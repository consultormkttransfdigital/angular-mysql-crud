import { Action } from '@ngrx/store';
import { Usuario } from '../models/Usuario';

export const LOGIN = '[titleOpcSelected] Login'; 
export const VALIDA_USUARIO = '[idUsrSelected] Valida Usuario';
export const PANEL = '[titleOpcSelected] Panel';
export const CAJA = '[titleOpcSelected] Caja';
export const INGRESOS = '[titleOpcSelected] Ingresos';
export const EGRESOS = '[titleOpcSelected] Egresos';
export const CLIENTES = '[titleOpcSelected] Clientes';
export const INDICADORES = '[titleOpcSelected] Indicadores';

export const ENTERAPP = '[showNavBar] EnterApp';

export const PANEL_FILTER = '[fecProgramacion] Filter Panel';
export const PANEL_FILTER_VISTA = '[vista] Filter Panel'; 

export class LoginAction implements Action {
    readonly type = LOGIN;

    constructor( public payload : string ){}
}

export class ValidaUsuarioAction implements Action {
    readonly type = VALIDA_USUARIO;

    constructor( public payload : Usuario ) {}
}

export class PanelAction implements Action {
    readonly type = PANEL;

    constructor( public payload : string ){}
}

export class CajaAction implements Action {
    readonly type = CAJA;

    constructor( public payload : string ){}
}

export class IngresosAction implements Action {
    readonly type = INGRESOS;

    constructor( public payload : string ){}
}

export class EgresosAction implements Action {
    readonly type = EGRESOS;

    constructor( public payload : string ){}
}

export class ClientesAction implements Action { 
    readonly type = CLIENTES;

    constructor( public payload : string ){}
}

export class IndicadoresAction implements Action {
    readonly type = INDICADORES;

    constructor( public payload : string ){}
}

export class EnterAppAction implements Action {
    readonly type = ENTERAPP;
}

export class PanelFilterAction implements Action {
    readonly type = PANEL_FILTER;

    constructor( public payload : Date ){}
}

export class PanelFilterVistaAction implements Action {
    readonly type = PANEL_FILTER_VISTA;

    constructor( public payload: string ){}
}


export type mainNavActions = LoginAction | ValidaUsuarioAction | PanelAction | CajaAction | 
    IngresosAction | EgresosAction | ClientesAction | IndicadoresAction |
    EnterAppAction | PanelFilterAction | PanelFilterVistaAction ;

                      