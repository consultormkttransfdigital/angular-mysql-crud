import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

// ngrx
import { Store } from '@ngrx/store';
import { AppState } from '../../models/globals.model'; 

import * as fromMainNav from '../../main-nav/main-nav.actions';

import { Usuario } from '../../models/Usuario';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { passwordValidation } from 'src/app/validations/password-validation.directive';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private _formBuilder: FormBuilder,
    private store: Store<AppState>,
    private router: Router) { }

  ngOnInit() {

    /* const accion = new LoginAction();
    this.store.dispatch(accion); 
 */
    this.store.dispatch(new fromMainNav.LoginAction('Login'))

    this.loginFormGroup = this._formBuilder.group({
      username:["", Validators.required],
      password:["", {
        validators: [Validators.required,
                     Validators.minLength(4),
                    passwordValidation()]
      }]
    });


  }

  get username(){
    return this.loginFormGroup.get('username');
  }

  get password(){
    return this.loginFormGroup.get('password');
  }  

  submit(){

    if (!this.loginFormGroup.valid){
      alert("Alguna regla de validación no se está cumpliendo");
      return;
    }
    console.log(this.loginFormGroup.value);
    this.onEnterApp();
    
  }

  onEnterApp(){
    
    let usrSeleccionado: Usuario;

    usrSeleccionado = {
      id_usuario: 1,
      nom_usuario: "Pepe Estilistas",
      cargo_usuario: "Estilista",
      url_usuario: "../../../assets/avatar1.jpg"
    }

    // url_usuario: "url('../../../assets/avatar1.jpg')"

    console.log('Ingresando a la App');
    // Seteando el evento de ingreso a la Aplicación
    this.store.dispatch(new fromMainNav.EnterAppAction());

    // Seteando usuario seleccionado
    this.store.dispatch(new fromMainNav.ValidaUsuarioAction(usrSeleccionado));

    // Navegar hacia opción por default de la App : Panel de trabajo 
    this.router.navigate(['/panel']);

  }
}