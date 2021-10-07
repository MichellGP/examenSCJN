import { Directive, ElementRef, Input } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[errors-msg]'
})
export class ErrorsDirective {

  private _mensaje:string='Campo Obligatorio';
  private _color:string='red';
  private _campo!:ValidationErrors | null | undefined ;

  private htmlRef!:ElementRef;

  @Input() set mensaje(msj:string){
    this._mensaje=msj;
    this.setMensaje();
    this.setColor()
  }

  @Input() set errormsg(form:ValidationErrors | null){

    if (!form) {
      this._mensaje='Obligatorio'
    }
    
    if (form?.required) {
      this._mensaje='Obligatorio'
      this.setMensaje()
    }else if(form?.pattern){
      this._mensaje='El campo no cumple el formato'
      this.setMensaje()
    }else if(form?.min){
      this._mensaje='El valor debe de ser positivo'
      this.setMensaje()
    }
  }

  constructor(private el:ElementRef) {
    this.htmlRef=el; 
    this.setMensaje();
    this.setColor()
  }

  setMensaje(){
    this.htmlRef.nativeElement.innerText= this._mensaje;
  }

  setColor(){
    this.htmlRef.nativeElement.style.color=this._color
  }

  errors(){
    
  }

}
