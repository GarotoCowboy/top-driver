import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NossosVeiculosComponent } from './nossos-veiculos.component';

describe('NossosVeiculosComponent', () => {
  let component: NossosVeiculosComponent;
  let fixture: ComponentFixture<NossosVeiculosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NossosVeiculosComponent]
    });
    fixture = TestBed.createComponent(NossosVeiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
