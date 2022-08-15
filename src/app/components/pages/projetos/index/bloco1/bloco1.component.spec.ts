import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bloco1Component } from './bloco1.component';

describe('Bloco1Component', () => {
  let component: Bloco1Component;
  let fixture: ComponentFixture<Bloco1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bloco1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bloco1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
