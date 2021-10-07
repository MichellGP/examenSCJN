import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCorrespondenciaComponent } from './agregar-correspondencia.component';

describe('AgregarCorrespondenciaComponent', () => {
  let component: AgregarCorrespondenciaComponent;
  let fixture: ComponentFixture<AgregarCorrespondenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCorrespondenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCorrespondenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
