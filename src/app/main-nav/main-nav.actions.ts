import { Action } from '@ngrx/store';
import { Usuario } from '../models/Usuario';
import { OpcSelected } from '../models/OpcSelected';
import { NotificacionesComponent } from '../components/notificaciones/notificaciones.component';

export const LOGIN = '[titleOpcSelected] Login'; 
export const VALIDA_USUARIO = '[idUsrSelected] Valida Usuario';
export const PANEL = '[titleOpcSelected] Panel';
export const INICIAR_DIA = '[OpcSelected] Iniciar Día';
export const CAJA = '[titleOpcSelected] Caja';
export const INGRESOS = '[titleOpcSelected] Ingresos';
export const EGRESOS = '[titleOpcSelected] Egresos';
export const CLIENTES = '[titleOpcSelected] Clientes';
export const CITAS = '[titleOpcSelected] Citas';
export const COMPRAS = '[titleOpcSelected] Compras';
export const INDICADORES = '[titleOpcSelected] Indicadores';
export const NOTIFICACIONES = '[titleOpcSelected] Notificaciones';

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

export class IniciarDiaAction implements Action {
    readonly type = INICIAR_DIA;

    constructor( public payload : OpcSelected ) {}
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

export class CitasAction implements Action {
    readonly type = CITAS;

    constructor ( public payload : string ) {}
}

export class ComprasAction implements Action {
    readonly type = COMPRAS;

    constructor (public payload : string) {}
}

export class IndicadoresAction implements Action {
    readonly type = INDICADORES;

    constructor( public payload : string ){}
}

export class NotificacionesAction implements Action {
    readonly type = NOTIFICACIONES;

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


export type mainNavActions = LoginAction | ValidaUsuarioAction | PanelAction | IniciarDiaAction | CajaAction | 
    IngresosAction | EgresosAction | ClientesAction | CitasAction | ComprasAction |
    IndicadoresAction | NotificacionesAction |
    EnterAppAction | PanelFilterAction | PanelFilterVistaAction ;

                      