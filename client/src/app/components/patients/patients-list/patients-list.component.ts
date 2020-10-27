import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../../../services/pacientes.service';
import { Paciente } from 'src/app/models/paciente';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {

  patient: Paciente = {
    id: 0,
    nombre: '',
    apellido: '',
    numid: ''
  }

  patients: any = [];

  constructor(private patientsService: PacientesService) { }

  ngOnInit(): void {
    this.getPatient()
  }

  getPatient() {
    this.patientsService.getPacientes().subscribe(
      res => {
        this.patients = res;
      },
      err => console.error(err)
    );
  }

  deletePatient() {
    this.patientsService.deletePaciente(this.patient.id + '').subscribe(
      res => {
        this.getPatient();
        this.patient = {
          id: 0,
          nombre: '',
          apellido: '',
          numid: ''
        }
        console.log(res);
      },
      err => console.error(err)
    )
  }
  
  savePatient() {
    delete this.patient.id;

    this.patientsService.setPaciente(this.patient).subscribe(
      res => {
        this.getPatient();
        this.patient = {
          id: 0,
          nombre: '',
          apellido: '',
          numid: ''
        }
        console.log(res);
      },
      err => console.error(err)
    )
  }

  edit(paciente: Paciente) {
    this.patient = paciente;
  }

  saveOrEdit() {
    if (this.patient.id == 0) {
      this.savePatient();
    } else {
      this.updatePatient(this.patient.id + '', this.patient);
    }
  }

  updatePatient(id: String, paciente: Paciente) {
    this.patientsService.updatePaciente(id, paciente).subscribe(
      res => {
        this.getPatient();
        this.patient = {
          id: 0,
          nombre: '',
          apellido: '',
          numid: ''
        }
        console.log(res);
      },
      err => console.error(err)
    )
  }
}
