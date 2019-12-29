import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ValidaUsrComponent } from './components/valida-usr/valida-usr.component';
import { WorkbenchComponent } from './components/workbench/workbench.component';
import { IndicadoresComponent } from './components/indicadores/indicadores.component';
import { CajaComponent } from './components/caja/caja.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';
import { EgresosComponent } from './components/egresos/egresos.component';

import { SharedWorkComponent } from './components/shared-work/shared-work.component';
import { CitasComponent } from './components/citas/citas.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ComprasComponent } from './components/compras/compras.component';

import { JuegosComponent } from './components/juegos/juegos.component';
import { PadreLejComponent } from './components/padre-lej/padre-lej.component';
import { Ejemplo1Component } from '../app/contador/ejemplo1/ejemplo1.component';
import { ReduxComponent} from './contador/redux/redux.component';
import { ReduxEjemploComponent } from './redux-ejemplo/redux-ejemplo.component';
import { VoiceControlComponent } from './components/voice-control/voice-control.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'valida-usr', component: ValidaUsrComponent},
  {path: 'panel', component: WorkbenchComponent},
  {path: 'simultaneos', component: SharedWorkComponent},
  {path: 'caja', component: CajaComponent},
  {path: 'ingresos', component: IngresosComponent},
  {path: 'egresos', component: EgresosComponent},
  {path: 'citas', component: CitasComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'compras', component: ComprasComponent},
  {path: 'indicadores', component: IndicadoresComponent},
  {path: 'juegos', component: JuegosComponent},
  {path: 'padre-lej', component: PadreLejComponent},
  {path: 'ejemplo1', component: Ejemplo1Component},
  {path: 'redux', component: ReduxComponent},
  {path: 'redux2', component: ReduxEjemploComponent},
  {path: 'voice', component: VoiceControlComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}

];

// {path: 'panel', component: SharedWorkComponent},

// {path: 'posts', component: PostsComponent},
// {path: '', redirecTo: '/usuarios', pathMatch: 'full'}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
