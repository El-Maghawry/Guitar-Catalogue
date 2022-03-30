import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarListItemComponent } from './guitar-list-item.component';

describe('GuitarListItemComponent', () => {
  let component: GuitarListItemComponent;
  let fixture: ComponentFixture<GuitarListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuitarListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
