import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { CorrespondenciaCompleta } from '../interfaces/correspondeciaCompleta';
import { Correspondencia } from '../interfaces/correspondencia';
import { TipoPaquete } from '../interfaces/tipoPaquete';

@Injectable({
  providedIn: 'root'
})
export class CorreolocalService {

  consulta:Correspondencia[]=[]
  encabezados:string[]=[];
  IdEditar!:number | null;
  correoEditar!:Correspondencia | null;

  constructor(private http:HttpClient) { }

  get resConsulta(){
    return this.consulta;
  }

  obtenerCorrespondencia(){
    const url=`${environment.urlCorreo}/correolocal`
    return this.http.get<Correspondencia[]>(url) 
  }

  obtenerPorID(id:number){

    const url=`${environment.urlCorreo}/correolocal/${id}`
    return this.http.get<Correspondencia[]>(url)
  }


  obtenerPorFecha(fecha:Date){
    const url=`${environment.urlCorreo}/correolocal/fecha/${fecha}`
    return this.http.get<Correspondencia[]>(url)
  }

  agregarCorrespondencia(body:CorrespondenciaCompleta){
    const url=`${environment.urlCorreo}/correolocal/`
    return this.http.post<CorrespondenciaCompleta[]>(url,body)
  }

  actualizarCorrespondencia(body:CorrespondenciaCompleta,id:number){
    const url=`${environment.urlCorreo}/correolocal/${id}`
    return this.http.put<CorrespondenciaCompleta[]>(url,body)
  }

  obtenerTipos(){
    const url=`${environment.urlCorreo}/tipopaquete`
    return this.http.get<TipoPaquete[]>(url)
  }

  borrarCorrespondencia(id:number){
    const url=`${environment.urlCorreo}/correolocal/${id}`
    return this.http.delete<Correspondencia>(url)
  }

  validarPristineForm(form:FormGroup){
    
  }
}
