import { DecimalPipe } from '@angular/common';

export interface Ingreso {
    id_ingreso?: number;
    origen_ingreso?: number;
    cod_ingreso?: number;
    fec_ingreso?: Date;
    id_persona?: number;
    tot_ingreso?: number;
    created_at?: Date;
}