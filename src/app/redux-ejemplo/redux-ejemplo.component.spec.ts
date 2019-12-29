import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduxEjemploComponent } from './redux-ejemplo.component';

describe('ReduxEjemploComponent', () => {
  let component: ReduxEjemploComponent;
  let fixture: ComponentFixture<ReduxEjemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReduxEjemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReduxEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
