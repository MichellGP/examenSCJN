import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarTableComponent } from './navbar-table.component';

describe('NavbarTableComponent', () => {
  let component: NavbarTableComponent;
  let fixture: ComponentFixture<NavbarTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
