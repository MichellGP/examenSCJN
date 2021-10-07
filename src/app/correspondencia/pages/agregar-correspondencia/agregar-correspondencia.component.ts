import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CorrespondenciaCompleta } from '../../interfaces/correspondeciaCompleta';
import { Correspondencia } from '../../interfaces/correspondencia';
import { TipoPaquete } from '../../interfaces/tipoPaquete';
import { CorreolocalService } from '../../services/correolocal.service';

@Component({
  selector: 'app-agregar-correspondencia',
  templateUrl: './agregar-correspondencia.component.html',
  styleUrls: ['./agregar-correspondencia.component.scss']
})
export class AgregarCorrespondenciaComponent implements OnInit {



  miFormulario: FormGroup = this.fb.group({
    oficio:            ['',[Validators.required,Validators.pattern('[0-9a-zA-Z]{1,3}-[a-zA-Z]{3}-[a-zA-Z]')]],
    expediente:        ['',Validators.required],
    tipoPaquete:       [0,Validators.required],
    numeroPaquete:     [0,[Validators.required,Validators.min(0)]],
    remitente:         ['',Validators.required],
    destinatario:      ['',Validators.required],
    fechaEnvio:        [new Date('yyyy-mm-ddT00:00:00'),Validators.required],
    fechaNotificacion: [new Date('yyyy-mm-dd')],
  })

  inputs:string[]=[];
  optTipoPaquete:TipoPaquete[]=[]
  errormsg:string='';
  hidden:boolean=true
  alert:boolean=false
  titulo:string="Agregar";
  textAlert:string="Agregado Correctamente";
  subscriptions:Subscription[]=[]
  paqueteID!:number;
  

  constructor(private fb:FormBuilder, 
              private correosService:CorreolocalService, 
              private router:Router,
              private activated:ActivatedRoute
              ) { }


  ngOnInit(): void {

    const params =this.activated.params.subscribe(({id})=>{
      if(id){
        this.titulo="Editar"
      }
    });

    this.inputs = Object.keys(this.miFormulario.controls);
    const obtenerTipos=this.correosService.obtenerTipos().subscribe(async(res)=>{
      this.optTipoPaquete=res;
      if(this.correosService.correoEditar){

        for await (const opt of this.optTipoPaquete) {
          if (opt.tipoPaqueteDesc===this.correosService.correoEditar.tipoPaqueteDesc) {
            this.paqueteID=opt.tipoPaqueteID;
          }
        }
      }
    })
    
    if(this.correosService.correoEditar){
      const {destinatario,expediente,fechaEnvio,fechaNotificacion,numeroPaquete,oficio,remitente,tipoPaqueteDesc}= this.correosService.correoEditar;
      
      this.miFormulario.get('oficio')?.reset(oficio);
      this.miFormulario.get('expediente')?.reset(expediente);
      this.miFormulario.get('tipoPaquete')?.reset(this.paqueteID);
      this.miFormulario.get('numeroPaquete')?.reset(numeroPaquete);
      this.miFormulario.get('remitente')?.reset(remitente);
      this.miFormulario.get('destinatario')?.reset(destinatario);
      this.miFormulario.get('fechaEnvio')?.reset(fechaEnvio);
      this.miFormulario.get('fechaNotificacion')?.reset(fechaNotificacion);
    }
    this.subscriptions.push(params,obtenerTipos);

  }

  tieneError(campo:string){
    if(this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched){
      return true 
    }else{
      return false
    }
  }
  agregar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      console.log(this.miFormulario.get('fechaEnvio')?.value);
      return
    }
    

    const body:CorrespondenciaCompleta ={
      codigoDeBarras:'',
      correoLocalID:0,
      destinatario:'',
      expediente:'',
      fechaActualizacion: new Date(),
      fechaCreacion: new Date(),
      fechaEnvio:new Date(),
      fechaNotificacion: new Date(),
      numeroPaquete:0,
      oficio:'',
      remitente:'',
      tipoPaqueteID:1,
      usuarioActualizacion:'',
      usuarioCreacion:''
    }

    const form = this.miFormulario

    body.correoLocalID= parseInt((Math.random() * 10000).toString());
    body.oficio=form.get('oficio')?.value
    body.expediente=form.get('expediente')?.value
    body.tipoPaqueteID=parseInt(form.get('tipoPaquete')?.value)
    body.numeroPaquete=parseInt(form.get('numeroPaquete')?.value);
    body.remitente=form.get('remitente')?.value;
    body.destinatario=form.get('destinatario')?.value;
    body.fechaEnvio= new Date();
    body.fechaNotificacion= new Date();
    this.miFormulario.touched;

    console.log(body);
    
    if (this.correosService.IdEditar) {
      body.correoLocalID= this.correosService.IdEditar;
      this.correosService.actualizarCorrespondencia(body,this.correosService.IdEditar).subscribe(res=>{
        try {
          this.textAlert="Actualizado Correctamente"
          this.alert=true
          this.miFormulario.reset();
          this.correosService.IdEditar= null
          this.correosService.correoEditar= null
          setTimeout(() => {
            this.alert=false
            this.router.navigate(['/correspondencia'])
          }, 1500);
        } catch (error) {
          
        }
      })
      return
    }



    
    this.correosService.agregarCorrespondencia(body).subscribe(res=>{
      try {
        this.alert=true
        this.miFormulario.reset();
        setTimeout(() => {
        this.alert=false
        }, 2000);
      } catch (error) {
        
      }
    });

    this.subscriptions.push

    console.log(this.miFormulario.value);

  }

  cancelar(){
    if(!this.miFormulario.pristine){
      this.hidden=false
      return
    }
    this.router.navigateByUrl('/')
  }


  classToggle(){
    console.log(this.hidden);
  }

}
