import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarDiaComponent } from './iniciar-dia.component';

describe('IniciarDiaComponent', () => {
  let component: IniciarDiaComponent;
  let fixture: ComponentFixture<IniciarDiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciarDiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
