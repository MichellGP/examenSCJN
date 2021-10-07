import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CorreolocalService } from '../../services/correolocal.service';

import { debounceTime, switchMap, tap } from "rxjs/operators";
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar-table',
  templateUrl: './navbar-table.component.html',
  styleUrls: ['./navbar-table.component.scss']
})
export class NavbarTableComponent implements OnInit,OnDestroy {

  inputID:FormControl;
  inputCalendar:FormControl;
  subscriptions:Subscription[]=[];

  constructor(private correoService:CorreolocalService,
              private router:Router
    ) {
    this.inputID = new FormControl(''); 
    this.inputCalendar = new FormControl(new Date('dd-mm-yyyy')); 
   }
  ngOnDestroy(): void {
    this.subscriptions.forEach(s=>s.unsubscribe())
  }

  ngOnInit(): void {
    const id=this.inputID.valueChanges.pipe(
      debounceTime(1000),
      tap(()=>this.correoService.consulta=[]),
      switchMap(id => this.correoService.obtenerPorID(id))
    ).subscribe(res=>{
      this.correoService.consulta=res
    })

    const calendar=this.inputCalendar.valueChanges
    .pipe(
      debounceTime(1000),
      tap(()=>this.correoService.consulta=[]),
      switchMap(fecha => this.correoService.obtenerPorFecha(fecha))
    )
    .subscribe(res=>{
      
      this.correoService.consulta=res
    })
    
    this.subscriptions.push(id,calendar)
    
  }

  get idEditar(){
    return this.correoService.IdEditar;
  }

  buscarPorId(){
    const id = this.inputID.value;
    const obtenerPorID=this.correoService.obtenerPorID(id).subscribe(res=> this.correoService.consulta=res)
    this.subscriptions.push(obtenerPorID)
    
  }

  navegar(){
    if(!this.correoService.IdEditar){
      return
    }

    this.router.navigate(['correspondencia/editar',this.correoService.IdEditar])
  }

  navegarAgregar(){
    this.correoService.IdEditar= null
    this.correoService.correoEditar= null
    this.router.navigateByUrl('correspondencia/agregar')

  }

}
