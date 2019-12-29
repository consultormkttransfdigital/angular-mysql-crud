import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduxHijoComponent } from './redux-hijo.component';

describe('ReduxHijoComponent', () => {
  let component: ReduxHijoComponent;
  let fixture: ComponentFixture<ReduxHijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReduxHijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReduxHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
