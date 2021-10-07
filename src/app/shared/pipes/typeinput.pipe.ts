import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeinput'
})
export class TypeinputPipe implements PipeTransform {

  transform(input: unknown): string {
    switch (input) {
      case 'tipoPaquete'       :
        return 'number'
      case 'numeroPaquete'     :
        return 'number'
      case 'fechaEnvio'        :
        return 'date'
      case 'fechaNotificacion' :
        return 'date'
      default:
        return 'text'
    }
  }

}
