import { TestBed } from '@angular/core/testing';

import { ComunicacionServiceGavilanService } from './comunicacion-service-gavilan.service';

describe('ComunicacionServiceGavilanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComunicacionServiceGavilanService = TestBed.get(ComunicacionServiceGavilanService);
    expect(service).toBeTruthy();
  });
});
