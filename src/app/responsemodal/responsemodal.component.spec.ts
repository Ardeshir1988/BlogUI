import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsemodalComponent } from './responsemodal.component';

describe('ResponsemodalComponent', () => {
  let component: ResponsemodalComponent;
  let fixture: ComponentFixture<ResponsemodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsemodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
