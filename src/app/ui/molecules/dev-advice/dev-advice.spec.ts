import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DevAdvice} from './dev-advice';

describe('DevAdvice', () => {
  let component: DevAdvice;
  let fixture: ComponentFixture<DevAdvice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DevAdvice]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DevAdvice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
