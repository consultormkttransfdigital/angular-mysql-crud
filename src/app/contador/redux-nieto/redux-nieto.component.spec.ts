import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduxNietoComponent } from './redux-nieto.component';

describe('ReduxNietoComponent', () => {
  let component: ReduxNietoComponent;
  let fixture: ComponentFixture<ReduxNietoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReduxNietoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReduxNietoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
