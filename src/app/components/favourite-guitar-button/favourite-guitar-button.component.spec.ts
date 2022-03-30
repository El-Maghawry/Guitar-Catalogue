import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteGuitarButtonComponent } from './favourite-guitar-button.component';

describe('FavouriteGuitarButtonComponent', () => {
  let component: FavouriteGuitarButtonComponent;
  let fixture: ComponentFixture<FavouriteGuitarButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteGuitarButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteGuitarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
