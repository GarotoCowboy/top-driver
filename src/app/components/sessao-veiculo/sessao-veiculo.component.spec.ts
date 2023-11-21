import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessaoVeiculoComponent } from './sessao-veiculo.component';

describe('SessaoVeiculoComponent', () => {
  let component: SessaoVeiculoComponent;
  let fixture: ComponentFixture<SessaoVeiculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SessaoVeiculoComponent]
    });
    fixture = TestBed.createComponent(SessaoVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
