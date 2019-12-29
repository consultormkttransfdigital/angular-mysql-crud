import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidaUsrComponent } from './valida-usr.component';

describe('ValidaUsrComponent', () => {
  let component: ValidaUsrComponent;
  let fixture: ComponentFixture<ValidaUsrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidaUsrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidaUsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
