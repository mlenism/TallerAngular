import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PatientsListComponent } from './components/patients/patients-list/patients-list.component';
import { PacientesService } from './services/pacientes.service';
import { PatientsComponent } from './components/patients/patients.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PatientsListComponent,
    PatientsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PacientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
