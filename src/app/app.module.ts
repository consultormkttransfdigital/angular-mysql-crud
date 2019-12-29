import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Ejemplo de padre-lej
import { FormsModule } from '@angular/forms';

// Requerido por Stepper
import { ReactiveFormsModule } from '@angular/forms';

import { ComunicacionService } from './services/comunicacion.service';

// Importacion de Servicio Game
import { GamesService} from './services/games.service';

// Para que funcione httpClient
import { HttpClientModule } from '@angular/common/http';

// Agregado por corrección
import { BrowserModule } from '@angular/platform-browser';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Importar componentes de Material
import { MaterialModule } from './material.module';

import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

import { ClientesComponent } from './components/clientes/clientes.component';
import { WorkbenchComponent } from './components/workbench/workbench.component';
import { CitasComponent } from './components/citas/citas.component';
import { SharedWorkComponent } from './components/shared-work/shared-work.component';
import { ComprasComponent } from './components/compras/compras.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { LoginComponent } from './components/login/login.component';
import { ListWorksComponent } from './components/workbench/list-works/list-works.component';
import { PadreLejComponent } from './components/padre-lej/padre-lej.component';
import { HijoALejComponent } from './components/hijo-a-lej/hijo-a-lej.component';
import { HijoBLejComponent } from './components/hijo-b-lej/hijo-b-lej.component';
import { NietoALejComponent } from './components/nieto-a-lej/nieto-a-lej.component';
import { NietoBLejComponent } from './components/nieto-b-lej/nieto-b-lej.component';

import { ConstantsService } from './services/constants.service';
import { HijoComponent } from './contador/hijo/hijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';
import { Ejemplo1Component } from './contador/ejemplo1/ejemplo1.component';
import { ReduxComponent } from './contador/redux/redux.component';
import { ReduxHijoComponent } from './contador/redux-hijo/redux-hijo.component';
import { ReduxNietoComponent } from './contador/redux-nieto/redux-nieto.component';

// ngrx
import { StoreModule } from '@ngrx/store';
import { miReducer } from '../app/redux-ejemplo/redux_ejemplo.reducer'; 




import { mainNavReducer } from '../app/main-nav/main-nav.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { reducers, metaReducers } from './reducers';
import { ReduxEjemploComponent } from './redux-ejemplo/redux-ejemplo.component';
import { IndicadoresComponent } from './components/indicadores/indicadores.component';
import { ValidaUsrComponent } from './components/valida-usr/valida-usr.component';
import { VoiceControlComponent } from './components/voice-control/voice-control.component';
import { CajaComponent } from './components/caja/caja.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';
import { EgresosComponent } from './components/egresos/egresos.component';
import { PasswordValidationDirective } from './validations/password-validation.directive';  

// Se va incorporar manejo de variables globales con comunicaciones de servicios
// Que soporten comunicaciones muchos a muchos entre componentes
// Por lo pronto se está mostrando el menú, siempre
// var mostrarNavegacion: boolean = true;

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    ClientesComponent,
    WorkbenchComponent,
    CitasComponent,
    SharedWorkComponent,
    ComprasComponent,
    JuegosComponent,
    LoginComponent,
    ListWorksComponent,
    PadreLejComponent,
    HijoALejComponent,
    HijoBLejComponent,
    NietoALejComponent,
    NietoBLejComponent,
    HijoComponent,
    NietoComponent,
    Ejemplo1Component,
    ReduxComponent,
    ReduxHijoComponent,
    ReduxNietoComponent,
    ReduxEjemploComponent,
    IndicadoresComponent,
    ValidaUsrComponent,
    VoiceControlComponent,
    CajaComponent,
    IngresosComponent,
    EgresosComponent,
    PasswordValidationDirective
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ 
      opcSelected : mainNavReducer
    }),
    StoreDevtoolsModule.instrument({ 
      maxAge: 25, 
      logOnly: environment.production })
  ],

 /*  StoreModule.forRoot({ 
    property01OfStore : miReducer
  }),
 */

  // forRoot , Se le pasa un Objeto
  // propiedad : mensaje
  // miReducer, se enlaza con la propiedad mensaje
  // mensaje sería una porción del Store

  /* StoreModule.forRoot(reducers, {
    metaReducers,
    runtimeChecks: {
      strictStateImmutability: true,
      strictActionImmutability: true
 */

// StoreModule.forRoot({titleOpcSelected: mainNavReducer}),
// Cuando se agregaron las dos, se quedó con la última definición
// La definición se sobre-escribió

  providers: [GamesService, ComunicacionService, ConstantsService],

  bootstrap: [AppComponent]
  
})
export class AppModule { }
