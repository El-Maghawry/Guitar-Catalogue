import { TestBed } from '@angular/core/testing';

import { GuitarCatalogueService } from './guitar-catalogue.service';

describe('GuitarCatalogueService', () => {
  let service: GuitarCatalogueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuitarCatalogueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
