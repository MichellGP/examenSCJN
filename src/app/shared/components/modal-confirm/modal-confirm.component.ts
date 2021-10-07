import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CorreolocalService } from 'src/app/correspondencia/services/correolocal.service';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent implements OnInit,OnDestroy {
  @Input() msg!:string;
  @Input() route!:string;
  @Input() id!:number
  subscriptions:Subscription[]=[];

  @Output() optCancelar:EventEmitter<boolean> = new EventEmitter
  @Output() optAceptar:EventEmitter<boolean> = new EventEmitter
  constructor(private correoService:CorreolocalService) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s=>{
      s.unsubscribe();
    })
  }

  ngOnInit(): void {
  }


  aceptar(){
    // this.router.navigateByUrl(this.route)
    
    if (this.id) {
      const borrar = this.correoService.borrarCorrespondencia(this.id).subscribe(res=>{
        
      });
      const correos = this.correoService.obtenerCorrespondencia().pipe(
        tap(()=>this.correoService.consulta=[])
      ).subscribe(res=>{
        this.correoService.consulta=res;
      });
      this.subscriptions.push(correos,borrar);
    }
    return this.optAceptar.emit(true);
  }

  cancelar(){
      return this.optCancelar.emit(true);
  }
}
