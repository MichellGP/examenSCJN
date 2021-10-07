import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { CorreolocalService } from '../../services/correolocal.service';

@Component({
  selector: 'app-correspondencia',
  templateUrl: './correspondencia.component.html',
  styleUrls: ['./correspondencia.component.scss']
})
export class CorrespondenciaComponent implements OnInit {

  constructor(private correoService:CorreolocalService) { }

  ngOnInit(): void {

  }

}
