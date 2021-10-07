import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Correspondencia } from '../../interfaces/correspondencia';
import { CorreolocalService } from '../../services/correolocal.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {


  encabezados:string[]=[];
  id:number=0;
  correoEditar!:Correspondencia
  hidden:boolean=true
  idEliminacion!:number;;
  subscriptions:Subscription[]=[];

  constructor(private correoService:CorreolocalService, private router:Router ) { }
  ngOnDestroy(): void {
   this.subscriptions.forEach(s=>{
     s.unsubscribe();
   })
  }

  ngOnInit(): void {
    const correspondencia = this.correoService.obtenerCorrespondencia()
    .pipe(
      tap(async res=>{
        if (res) {
          await Object.keys(res[0]).forEach(e=>this.encabezados.push(e))
        }
      })
    )
    .subscribe(res=> this.correoService.consulta=res)

    this.subscriptions.push(correspondencia);

  }
  

  get result(){
    return this.correoService.consulta
  }

  seleccionarEditar(item:Correspondencia){
    const el= document.getElementById(item.correoLocalID.toString());
    this.correoService.correoEditar=item
    this.correoService.IdEditar=item.correoLocalID
    
    el!.classList.add('focus')
  }

  eliminar(id:number){
    this.hidden=false

    this.idEliminacion=id

  }

  quitarClase(id:number){
    const el= document.getElementById(id.toString());
    el!.classList.remove('focus')
  }

}
