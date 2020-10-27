import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletaDatosComponent } from './completa-datos.component';

describe('CompletaDatosComponent', () => {
  let component: CompletaDatosComponent;
  let fixture: ComponentFixture<CompletaDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletaDatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletaDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
