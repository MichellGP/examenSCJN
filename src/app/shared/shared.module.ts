import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextoEncabezadoPipe } from './pipes/texto-encabezado.pipe';
import { ErrorsDirective } from './directives/errors.directive';
import { TypeinputPipe } from './pipes/typeinput.pipe';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';



@NgModule({
  declarations: [
    TextoEncabezadoPipe,
    ErrorsDirective,
    TypeinputPipe,
    ModalConfirmComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ModalConfirmComponent,
    TextoEncabezadoPipe,
    ErrorsDirective,
    TypeinputPipe
  ]
})
export class SharedModule { }
