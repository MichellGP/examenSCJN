import { Component, Input, OnInit } from '@angular/core';
import { Correspondencia } from '../../interfaces/correspondencia';

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.scss']
})
export class ItemTableComponent implements OnInit {
  @Input() item!:Correspondencia

  constructor() { }

  ngOnInit(): void {
  }

}
