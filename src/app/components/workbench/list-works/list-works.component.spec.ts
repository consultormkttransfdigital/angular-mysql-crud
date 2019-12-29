import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWorksComponent } from './list-works.component';

describe('ListWorksComponent', () => {
  let component: ListWorksComponent;
  let fixture: ComponentFixture<ListWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
