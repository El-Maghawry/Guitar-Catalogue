import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarCataloguePage } from './guitar-catalogue.page';

describe('GuitarCataloguePage', () => {
  let component: GuitarCataloguePage;
  let fixture: ComponentFixture<GuitarCataloguePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuitarCataloguePage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarCataloguePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
