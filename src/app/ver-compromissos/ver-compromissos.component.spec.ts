import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCompromissosComponent } from './ver-compromissos.component';

describe('VerCompromissosComponent', () => {
  let component: VerCompromissosComponent;
  let fixture: ComponentFixture<VerCompromissosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerCompromissosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerCompromissosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
