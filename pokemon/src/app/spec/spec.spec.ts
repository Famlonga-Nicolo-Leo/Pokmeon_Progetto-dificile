import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spec } from './spec';

describe('Spec', () => {
  let component: Spec;
  let fixture: ComponentFixture<Spec>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spec],
    }).compileComponents();

    fixture = TestBed.createComponent(Spec);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
