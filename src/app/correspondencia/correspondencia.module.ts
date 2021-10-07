import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorrespondenciaRoutingModule } from './correspondencia-routing.module';
import { ItemTableComponent } from './components/item-table/item-table.component';
import { TableComponent } from './components/table/table.component';
import { CorrespondenciaComponent } from './pages/correspondencia/correspondencia.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarTableComponent } from './components/navbar-table/navbar-table.component';
import { AgregarCorrespondenciaComponent } from './pages/agregar-correspondencia/agregar-correspondencia.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ItemTableComponent,
    TableComponent,
    CorrespondenciaComponent,
    HomeComponent,
    NavbarTableComponent,
    AgregarCorrespondenciaComponent,
    
  ],
  imports: [
    CommonModule,
    CorrespondenciaRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CorrespondenciaModule { }
