import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedWorkComponent } from './shared-work.component';

describe('SharedWorkComponent', () => {
  let component: SharedWorkComponent;
  let fixture: ComponentFixture<SharedWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
