import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'correspondencia',
    loadChildren:()=>import('./correspondencia/correspondencia.module').then(m=>m.CorrespondenciaModule)
  },
  {path:'**',redirectTo:'correspondencia'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
