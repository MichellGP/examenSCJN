import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCorrespondenciaComponent } from './pages/agregar-correspondencia/agregar-correspondencia.component';
import { CorrespondenciaComponent } from './pages/correspondencia/correspondencia.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'',
        component:CorrespondenciaComponent
      },
      {
        path:'agregar',
        component:AgregarCorrespondenciaComponent
      },
      {
        path:'editar/:id',
        component:AgregarCorrespondenciaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorrespondenciaRoutingModule { }
