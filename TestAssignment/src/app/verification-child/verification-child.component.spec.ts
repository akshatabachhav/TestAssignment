import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationChildComponent } from './verification-child.component';

describe('VerificationChildComponent', () => {
  let component: VerificationChildComponent;
  let fixture: ComponentFixture<VerificationChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
