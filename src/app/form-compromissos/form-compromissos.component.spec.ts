import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCompromissosComponent } from './form-compromissos.component';

describe('FormCompromissosComponent', () => {
  let component: FormCompromissosComponent;
  let fixture: ComponentFixture<FormCompromissosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormCompromissosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCompromissosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
