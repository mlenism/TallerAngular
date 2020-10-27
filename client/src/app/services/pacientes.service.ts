import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

import { Paciente } from '../models/paciente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  private API_URI = 'http://localhost:3000/pacientes';

  constructor(private http: HttpClient) { }

  getPacientes(): Observable<Paciente> {
    return this.http.get(this.API_URI);
  }

  getPaciente(id: String): Observable<Paciente> {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  setPaciente(paciente: Paciente): Observable<any> {
    return this.http.post(this.API_URI, paciente, {responseType: 'text'});
  }

  updatePaciente(id: String, updatedPaciente: Paciente): Observable<any> {
    return this.http.put(`${this.API_URI}/${id}`, updatedPaciente, {responseType: 'text'});
  }

  deletePaciente(id: String): Observable<any> {
    return this.http.delete(`${this.API_URI}/${id}`, {responseType: 'text'});
  }

}
