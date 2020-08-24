import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationCompComponent } from './verification-comp.component';

describe('VerificationCompComponent', () => {
  let component: VerificationCompComponent;
  let fixture: ComponentFixture<VerificationCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
