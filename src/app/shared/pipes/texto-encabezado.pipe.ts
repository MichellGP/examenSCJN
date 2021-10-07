import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encabezado'
})
export class TextoEncabezadoPipe implements PipeTransform {

  transform(texto: string): string {
    switch (texto) {
      case "oficio":
            return 'Número Oficio'
      case "expediente":
            return 'Número expediente'
      case "tipoPaqueteDesc":
            return 'Descripción'
      case "numeroPaquete":
            return 'Número paquete'
      case "fechaEnvio":
            return 'Fecha envío'
      case "fechaNotificacion":
            return 'Fecha Notificación'
      case "remitente":
            return 'Remitente'
      case "destinatario":
            return 'Destinatario'
      case "correoLocalID":
            return 'CorreoLocalID'
      default:
        return texto
        break;
    }
  }

}
