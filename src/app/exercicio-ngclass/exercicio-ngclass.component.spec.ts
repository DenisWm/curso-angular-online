import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioNgclassComponent } from './exercicio-ngclass.component';

describe('ExercicioNgclassComponent', () => {
  let component: ExercicioNgclassComponent;
  let fixture: ComponentFixture<ExercicioNgclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioNgclassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercicioNgclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
