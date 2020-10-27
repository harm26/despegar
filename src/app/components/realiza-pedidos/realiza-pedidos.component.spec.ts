import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizaPedidosComponent } from './realiza-pedidos.component';

describe('RealizaPedidosComponent', () => {
  let component: RealizaPedidosComponent;
  let fixture: ComponentFixture<RealizaPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealizaPedidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizaPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
