import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Especificando mejor el tipo de dato de retorno del get
import { Ingreso } from '../models/Ingreso';

@Injectable({
  providedIn: 'root'
})
export class IngresosService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getIngresos() {
    return this.http.get<Ingreso[]>(`${this.API_URI}/ingresos`)
  }

  getIngreso(id: string) {
    return this.http.get<Ingreso>(`${this.API_URI}/ingresos/${id}`) 
  }

  deleteIngreso(id: string) {
    return this.http.delete(`${this.API_URI}/ingresos/${id}`);
  }

  saveIngreso(ingreso: Ingreso) {
    return this.http.post(`${this.API_URI}/ingresos`, ingreso);
  }

  updateIngreso(id: string, updatedIngreso: Ingreso): Observable<any> {
    return this.http.put(`${this.API_URI}/ingresos/${id}`, updatedIngreso);
  }
}

